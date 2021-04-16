import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean|Error> {

    const options: KeycloakOptions = {
      config : environment.keycloak,
      loadUserProfileAtStartUp: false,
      initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: true
      },
      bearerExcludedUrls: []
    };

    return (): Promise<boolean|Error> => {
        return new Promise(async (resolve, reject) => {
            try {
                await keycloak.init(options);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };
}
