import { NextResponse, type NextRequest } from "next/server";
import { isMaintenanceMode } from "@/lib/maintenance";

export function proxy(request: NextRequest) {
  if (!isMaintenanceMode()) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.pathname = "/maintenance";
  const response = request.nextUrl.pathname === "/maintenance"
    ? NextResponse.next({ status: 503 })
    : NextResponse.rewrite(destination, { status: 503 });
  response.headers.set("Retry-After", "3600");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}

// Keep API endpoints and public files accessible; rewrite pages without redirect loops.
export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|.*\\.[^/]+$).*)"],
};
