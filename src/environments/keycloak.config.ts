/**
 * Here you can add the configuration related to keycloak
 * So we can use this common config for diffrent environment
 */
import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'http://192.168.64.2:31484/auth',
  realm: 'myrealm',
  clientId: 'demo',
};

export default keycloakConfig;
