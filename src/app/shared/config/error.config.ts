import { switchcase } from '../utils/utils';

export const mapErrorMessage = (message): string =>
  switchcase({
    400: 'ERROR.ERR_400',
    401: 'ERROR.ERR_401',
    403: 'ERROR.ERR_403',
    404: 'ERROR.ERR_404',
    409: 'ERROR.ERR_409',
    500: 'ERROR.ERR_500',
    502: 'ERROR.ERR_502'
  })('ERROR.ERR_DEFAULT')(message);
