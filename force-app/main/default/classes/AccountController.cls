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

    @AuraEnabled(cacheable=true)
    public static Account getAccountById(Id recordId) {
        Account ac = [select Id, Name, Type, Industry from Account where Id = :recordId];
        return ac;
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

    @AuraEnabled
    public static Account updateAccount(Id recordId, string name, string accountnumber) {
        try {
            Account ac = new Account(Id = recordId);
            ac.Name = name;
            ac.AccountNumber = accountnumber;
            update ac;
            return ac;
        } catch (DmlException e) {
            throw new AuraHandledException(e.getMessage());
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong. Contact your admin.');
        }
    }

    @AuraEnabled
    public static void deleteAccount(Id recordId) {
        try {
            Account ac = new Account(Id = recordId);
            delete ac;
        } catch (DmlException e) {
            throw new AuraHandledException(e.getMessage());
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong. Contact your admin.');
        }
    }
}