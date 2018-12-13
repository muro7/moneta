import Customer from './Customer';
import Bank from './Bank';
import Branch from './Branch';
import Account from './Account';
import Statement from './Statement';

export default class State {
  public authenticated: boolean = false;
  public bank?: Bank = undefined;
  public branch?: Branch = undefined;
  public customer?: Customer = undefined;
  public account?: Account = undefined;
  public banks: Bank[] = [];
  public branches: Branch[] = [];
  public customers: Customer[] = [];
  public accounts: Account[] = [];
  public statements: Statement[] = [];
}
