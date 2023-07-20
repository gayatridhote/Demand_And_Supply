import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit, AfterViewInit {

  teamRequestId: boolean = true;
  positionId: boolean = true;  
  positionName: boolean = true;
  teamRequestName: boolean = true;
  localGrade: boolean = true;
  globalGrade: boolean = true;
  subSector: boolean = true;
  microSector: boolean = true;
  source: boolean = false;
  demandStatus: boolean = false;
  recruitingId: boolean = false;
  bUOfAccount: boolean = false;
  client: boolean = false;
  demandType: boolean = false;
  projectCode: boolean = false;
  jobName: boolean = false;
  roleNotes: boolean = false;
  roleType: boolean = false;
  backFillReason: boolean = false;
  outgoingEmployee: boolean = false;
  roleStartDate: boolean = false;
  roleEndDate: boolean = false;
  fulfillmentChannelFinal: boolean = false;
  demandFulfillmentStatus: boolean = false;
  additionalNotes: boolean = false;
  bUOfSkill: boolean = false;
  practice: boolean = false;
  globalPractice: boolean = false;
  fte: boolean = false;
  countryOfDeliveryPrimary: boolean = false;
  creationDate: boolean = false;
  updatedOn: boolean = false;
  weekByStatus: boolean = false;
  leadtimeInDays: boolean = false;
  ageing: boolean = false;
  requestUpdater: boolean = false;
  teamRequestComment2: boolean = false;
  buspHandler: boolean = false;
  pspHandler: boolean = false;
  recruiter: boolean = false;
  deliveryRole: boolean = false;
  deliverySkills: boolean = false;
  requestedBy: boolean = false;
  clientReference: boolean = false;
  expectedDailyRate: boolean = false;
  roleComment1: boolean = false;
  deliveryType: boolean = false;
  primaryLocationName: boolean = false;
  locationDescription: boolean = false;
  primaryCity: boolean = false;
  primaryState: boolean = false;
  primaryZipCode: boolean = false;
  primaryRegion: boolean = false;
  primaryGeoName: boolean = false;
  primaryGeoCity: boolean = false;
  closestGeoHub: boolean = false;
  hubSpoke: boolean = false;
  productionUnit: boolean = false;
  productionUnitName: boolean = false;
  targetBillRate: boolean = false;
  sellingBU: boolean = false;
  taleoLocationRequisitionLocation: boolean = false;
  taleoLocationDemandGeo: boolean = false;
  taleoLocationClientLocation: boolean = false;
  accountRegion: boolean = false;
  accountGeoName: boolean = false;
  accountGeoCity: boolean = false;
  thorStage: boolean = false;
  headCountType: boolean = false;
  s2rManaged: boolean = false;
  dmdCaseStatus: boolean = false;
  taskLabel: boolean = false;
  s2rId: boolean = false;
  s2rCaseId: boolean = false;
  candidateCount: boolean = false;
  assignedTo: boolean = false;
  teamRequestStatus: boolean = false;
  thorOptyId: boolean = false;
  thorContractType: boolean = false;
  thorProbability: boolean = false;
  thorCloseDate: boolean = false;
  thorStartDate: boolean = false;
  marketUnitBU: boolean = false;
  requestCreator: boolean = false;
  leadMarketArea: boolean = false;
  leadPracticeArea: boolean = false;
  sourceOfDemand: boolean = false;
  agedPastDueYN: boolean = false;
  weekByStatusGrouped: boolean = false;
  durationInAgedPastStatus: boolean = false;
  visible: boolean = false;
  isClientInterviewRequired: boolean = false;
  excludeOffshoreDcxID: boolean = false;
  leadMarketAndPracticeAreaSame: boolean = false;
  forecastType: boolean = false;
  daysSincePastDue: boolean = false;
  noOfSelfAppliedApplications:boolean = false;

  dataSource: any;
  user: any;

  
  displayColumns: string[] = [ /*'source', 'demandStatus', 'teamRequestId', 'positionId', 'recruitingId', 'bUOfAccount', 'subSector', 'microSector', 'client', 'demandType',
                              'projectCode', 'jobName', 'positionName', 'teamRequestName', 'localGrade', 'globalGrade', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee', 
                              'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
                              'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
                              'deliveryRole','deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
                              'primaryState', 'primaryZipCode', 'primaryRegion','primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
                              'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
                              'dmdCaseStatus','taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
                              'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea','leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired','excludeOffshoreDcxID','leadMarketAndPracticeAreaSame','forecastType','action'*/


    'positionId', 'bUOfAccount', 'projectCode', 'source', 'client', 'positionName', 'localGrade', 'globalGrade', 'demandStatus', 'teamRequestId', 'recruitingId', 'subSector', 'microSector', 'demandType',
    'jobName', 'teamRequestName', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee',
    'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
    'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
    'deliveryRole', 'deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
    'primaryState', 'primaryZipCode', 'primaryRegion', 'primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
    'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
    'dmdCaseStatus','taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
    'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea', 'leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired', 'excludeOffshoreDcxID', 'leadMarketAndPracticeAreaSame', 'forecastType', 'action']
  
  
  @Input() DisplayColumns: string[] = []; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:5104/DandSApi/DisplayForAdmin/GetAll').subscribe(response => {
      this.user = response;
      this.dataSource = new MatTableDataSource<UserDisplayComponent>(this.user);
      this.dataSource.paginator = this.paginator;
    })
  }

   ngAfterViewInit(): void {
    this.user.paginator = this.paginator;
  }


}
