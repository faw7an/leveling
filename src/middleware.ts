import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    // console.log('🔍 Middleware triggered for:', request.nextUrl.pathname);
    
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;
    
    // Define protected paths
    const protectedPaths = ['/home'];
    
    // Allow login and register pages always
    if (pathname === '/login') {
        if (token) {
            try {
                const secret = new TextEncoder().encode(process.env.SECRET_KEY!);
                await jwtVerify(token, secret);
                return NextResponse.redirect(new URL('/home', request.url));
            } catch (error) {
                const response = NextResponse.next();
                response.cookies.delete('token');
                return response;
            }
        }
        return NextResponse.next();
    }
    if (pathname === '/') {
        return NextResponse.next();
    }
    
    // Check if current path is protected
    const isProtectedPath = protectedPaths.some(path => {
        return pathname === path || pathname.startsWith(path + '/');
    });
    
    // console.log('🔒 Is protected path:', isProtectedPath);
    
    // If accessing a protected path
    if (isProtectedPath) {
        
        // No token found - redirect to login
        if (!token) {
            // console.log('No token found - redirecting to login');
            return NextResponse.redirect(new URL('/login', request.url));
        }
        
        // Verify token using jose (Edge Runtime compatible)
        try {            
            const secret = new TextEncoder().encode(process.env.SECRET_KEY!);
            const { payload } = await jwtVerify(token, secret);
            return NextResponse.next();
            
        } catch (error) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('token');
            return response;
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
