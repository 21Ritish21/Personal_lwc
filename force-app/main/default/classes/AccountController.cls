public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts() {
        List<Account> accounts = [select Id, Name, Phone, Active__c from Account];
        return accounts;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountByName(string name) {
        string p = '%' + name + '%';
        List<Account> accounts = [select Id, Name, Phone, Active__c from Account where Name like :p];
        return accounts;
    }

    @AuraEnabled
    public static List<Account> createAccount(string name, string accountnumber) {
        List<Account> accounts = null;
        try {
            accounts = new List<Account>();
            Account ac1 = new Account();
            ac1.Name = name;
            ac1.AccountNumber = accountnumber;
            accounts.add(ac1);
            insert accounts;
            return accounts;
        } catch (DmlException e) {
            throw new AuraHandledException(e.getMessage());
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong. Contact your admin.');
        }
    }
}