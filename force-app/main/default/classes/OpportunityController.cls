public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpportunity() {
        List<Opportunity> opportunity = [select Id, Name, StageName from Opportunity];
        return opportunity;
    }
}