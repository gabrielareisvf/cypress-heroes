import userData from '../fixtures/userdata.json';
import LoginPage from '../../pages/LoginPage';

const loginPage = new LoginPage();

describe('User logins', () => {
  it.only('Login Success', () => {
    loginPage.accessPage();
    loginPage.clickLoginPage();
    loginPage.loginWithAnyUser(userData.UserSuccess.email, userData.UserSuccess.password);
    loginPage.checkLogoutVisible();
  });

  it('Login Fail', () => {
    loginPage.accessPage();
    loginPage.clickLoginPage();
    loginPage.loginWithAnyUser(userData.UserFail.email, userData.UserFail.password);
    loginPage.alertLoginError();
  });
});
