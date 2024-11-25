import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    const token = authorization.split(' ')[1];
    if (!token) throw new UnauthorizedException('Invalid authorization token');
    try {
      const tokenPayload = await this.jwtService.verifyAsync(token);
      request.user = {
        userId: tokenPayload.sub,
        username: tokenPayload.username,
      };
      return true;
    } catch (e: any) {
      throw new UnauthorizedException(e);
    }
  }
}