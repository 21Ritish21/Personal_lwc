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
}