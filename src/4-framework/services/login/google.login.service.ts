import { AuthenticationErrors } from '@/2-business/errors';
import { IGoogleLoginService } from '@/2-business/services/authenticator/google-login.service';
import { IError } from '@/shared/error';
import axios from 'axios';
import QueryString from 'qs';

type GoogleTokensResult = {
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  id_token: string;
};

type GoogleUserResult = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
};

export class GoogleLoginService implements IGoogleLoginService {
  /**
   * Aqui faz operações de validação do serviço do google
   * @param code informação necessária para validação
   * @returns
   */
  public async login(
    code: string,
  ): Promise<{ valid: boolean; email: string } | IError> {
    try {
      const tokensGoogle = await this.getGoogleOAuthTokens(code);
      const googleUser = await this.getGoogleUser(
        tokensGoogle.id_token,
        tokensGoogle.access_token,
      );

      if (!googleUser.verified_email) {
        return { valid: false, email: '' };
      }
      return { valid: true, email: googleUser.email };
    } catch (error) {
      return AuthenticationErrors.notPossibleValidAccountGoogle();
    }
  }
  /**
   *
   * @param code
   * @returns
   */
  private async getGoogleOAuthTokens(
    code: string,
  ): Promise<GoogleTokensResult> {
    const url = 'https://oauth2.googleapis.com/token';

    const values = {
      code,
      client_id: process.env.GOOGLECLIENTID,
      client_secret: process.env.GOOGLECLIENTSECRET,
      redirect_uri: process.env.GOOGLEOAUTHREDIRECTURL,
      grant_type: 'authorization_code',
    };

    try {
      const res = await axios.post<GoogleTokensResult>(
        url,
        QueryString.stringify(values),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  /**
   *
   * @param param0
   * @returns
   */
  private async getGoogleUser(
    id_token: string,
    access_token: string,
  ): Promise<GoogleUserResult> {
    try {
      const res = await axios.get<GoogleUserResult>(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        },
      );
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
