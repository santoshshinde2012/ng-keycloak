/**
 * Here you can add the configuration related to keycloak
 * So we can use this common config for diffrent environment
 */
import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'http://192.168.64.11:32039/auth',
  realm: 'myrealm',
  clientId: 'angular',
};

export default keycloakConfig;
