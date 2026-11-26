import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllOpportunity from '@salesforce/apex/OpportunityController.getAllOpportunity';
export default class OpportunityList extends NavigationMixin(LightningElement) {
    opportunities = [];
    error;

    @wire(getAllOpportunity)
    wiredOpportunities({ data, error }) {
        if (data) {
            this.opportunities = data.map(opp => {
                let colourClass;
                if (opp.StageName === 'Closed Won') {
                    colourClass = 'green';
                } else if (opp.StageName === 'Closed Lost') {
                    colourClass = 'red';
                } else {
                    colourClass = 'amber';
                }
                return { ...opp, colourClass: colourClass };
            });
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.opportunities = [];
            console.log(JSON.stringify(error));
        }
    }
    handleSelect(event) {
    const oppId = event.currentTarget.dataset.id;

    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            objectApiName: 'Opportunity',
            actionName: 'view',
            recordId: oppId
        }
    });
}
}