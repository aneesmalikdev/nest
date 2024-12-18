import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

type AuthInput = { username: string; password: string }
type SignInData = { userId: string; username: string }
type AuthResult = { accessToken: string; userId: string; username: string }
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input)
    if (!user) {
      throw new UnauthorizedException()
    }

    return await this.signIn(user)
  }
  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    }
    const accessToken = await this.jwtService.signAsync(tokenPayload)
    return {
      accessToken,
      userId: user.userId,
      username: user.username,
    }
  }
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    // const user = await this.userService.findUserByName(input.username)
    // if (user && user.password === input.password) {
    //   return { userId: user.id, username: user.name }
    // }
    return null
  }
}
