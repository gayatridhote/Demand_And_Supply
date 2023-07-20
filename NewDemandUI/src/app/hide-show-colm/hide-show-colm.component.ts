import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hide-show-colm',
  templateUrl: './hide-show-colm.component.html',
  styleUrls: ['./hide-show-colm.component.css'],

})

export class HideShowColmComponent implements OnInit {
  ngOnInit(): void { }

  source: boolean = true;
  demandStatus: boolean = true;
  teamRequestId: boolean = true;
  positionId: boolean = true;
  recruitingId: boolean = true;
  bUOfAccount: boolean = true;
  subSector: boolean = true;
  microSector: boolean = true;
  client: boolean = true;
  demandType: boolean = true;
  projectCode: boolean = true;
  jobName: boolean = true;
  positionName: boolean = true;
  teamRequestName: boolean = true;
  localGrade: boolean = true;
  globalGrade: boolean = true;
  roleNotes: boolean = true;
  roleType: boolean = true;
  backFillReason: boolean = true;
  outgoingEmployee: boolean = true;
  roleStartDate: boolean = true;
  roleEndDate: boolean = true;
  fulfillmentChannelFinal: boolean = true;
  demandFulfillmentStatus: boolean = true;
  additionalNotes: boolean = true;
  bUOfSkill: boolean = true;
  practice: boolean = true;
  globalPractice: boolean = true;
  fte: boolean = true;
  countryOfDeliveryPrimary: boolean = true;
  creationDate: boolean = true;
  updatedOn: boolean = true;
  weekByStatus: boolean = true;
  leadtimeInDays: boolean = true;
  ageing: boolean = true;
  requestUpdater: boolean = true;
  teamRequestComment2: boolean = true;
  buspHandler: boolean = true;
  pspHandler: boolean = true;
  recruiter: boolean = true;
  deliveryRole: boolean = true;
  deliverySkills: boolean = true;
  requestedBy: boolean = true;
  clientReference: boolean = true;
  expectedDailyRate: boolean = true;
  roleComment1: boolean = true;
  deliveryType: boolean = true;
  primaryLocationName: boolean = true;
  locationDescription: boolean = true;
  primaryCity: boolean = true;
  primaryState: boolean = true;
  primaryZipCode: boolean = true;
  primaryRegion: boolean = true;
  primaryGeoName: boolean = true;
  primaryGeoCity: boolean = true;
  closestGeoHub: boolean = true;
  hubSpoke: boolean = true;
  productionUnit: boolean = true;
  productionUnitName: boolean = true;
  targetBillRate: boolean = true;
  sellingBU: boolean = true;
  taleoLocationRequisitionLocation: boolean = true;
  taleoLocationDemandGeo: boolean = true;
  taleoLocationClientLocation: boolean = true;
  accountRegion: boolean = true;
  accountGeoName: boolean = true;
  accountGeoCity: boolean = true;
  thorStage: boolean = true;
  headCountType: boolean = true;
  s2rManaged: boolean = true;
  taskLabel: boolean = true;
  s2rId: boolean = true;
  s2rCaseId: boolean = true;
  candidateCount: boolean = true;
  assignedTo: boolean = true;
  teamRequestStatus: boolean = true;
  thorOptyId: boolean = true;
  thorContractType: boolean = true;
  thorProbability: boolean = true;
  thorCloseDate: boolean = true;
  thorStartDate: boolean = true;
  marketUnitBU: boolean = true;
  requestCreator: boolean = true;
  leadMarketArea: boolean = true;
  leadPracticeArea: boolean = true;
  sourceOfDemand: boolean = true;
  agedPastDueYN: boolean = true;
  weekByStatusGrouped: boolean = true;
  durationInAgedPastStatus: boolean = true;
  daysSincePastDuenoOfSelfAppliedApplications: boolean = true;
  visible: boolean = true;
  isClientInterviewRequired: boolean = true;
  excludeOffshoreDcxID: boolean = true;
  leadMarketAndPracticeAreaSame: boolean = true;
  forecastType: boolean = true;

  /*pepperoni: boolean= false;
   extracheese: boolean=  true;
   mushroom: boolean=  true;
   
   
   toppings = new FormControl('');
 toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
   
   onChang( ){
     console.log(this.source);

   }*/



}
