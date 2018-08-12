import DsTab from './ds-tab';

let dsTab = new DsTab('.tab');

//

let dsTab2 = new DsTab(
    '.tab2',
    {
        fadeSpeed: 600
    }
);

dsTab2.Open( ".open" );

dsTab2.OpenEnd = function(){
    console.log("OpenEnd");
};
