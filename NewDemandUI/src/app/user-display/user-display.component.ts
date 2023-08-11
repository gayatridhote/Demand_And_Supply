import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { ServicesService } from '../Services/services.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplyHereComponent } from '../apply-here/apply-here.component';


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit, AfterViewInit {

  all: boolean = false;

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
  noOfSelfAppliedApplications: boolean = false;


  dataSource: any;
  user: any;
  

//Columns in table
  displayColumns: string[] = [ 'positionId', 'bUOfAccount', 'projectCode', 'source', 'client', 'positionName', 'localGrade', 'globalGrade', 'demandStatus', 'teamRequestId', 'recruitingId', 'subSector', 'microSector', 'demandType',
    'jobName', 'teamRequestName', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee',
    'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
    'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
    'deliveryRole', 'deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
    'primaryState', 'primaryZipCode', 'primaryRegion', 'primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
    'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
    'dmdCaseStatus', 'taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
    'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea', 'leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
    'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired', 'excludeOffshoreDcxID', 'leadMarketAndPracticeAreaSame', 'forecastType', 'action']


  @Input() DisplayColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private http: HttpClient, private service: ServicesService, private dialog : MatDialog) { }
// to fetch data from backend and  display it in table
  ngOnInit(): void {

    this.service.getAllData().subscribe(response => {
      this.user = response;
      this.dataSource = new MatTableDataSource<UserDisplayComponent>(this.user);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.user.paginator = this.paginator;
  }

  applyHere(positionId : any){
    this.Openpopup(positionId,'Details',ApplyHereComponent);
  }


  Openpopup( positionId: any, title: any , component: any){
     var popUp= this.dialog.open(component,{
      width:  '90%',
      height: '90%',
      data: {
        title: title,
        code: positionId,
        
      }
     });
     popUp.afterClosed().subscribe(item=>{
      console.log(item)
      
     })
  }
  
// to show selected columns in Table
  onSelect() {
    if (this.all == true) {
      this.teamRequestId = true;
      this.positionId = true;
      this.positionName = true;
      this.teamRequestName = true;
      this.localGrade = true;
      this.globalGrade = true;
      this.subSector = true;
      this.microSector = true;
      this.source = true;
      this.demandStatus = true;
      this.recruitingId = true;
      this.bUOfAccount = true;
      this.client = true;
      this.demandType = true;
      this.projectCode = true;
      this.jobName = true;
      this.roleNotes = true;
      this.roleType = true;
      this.backFillReason = true;
      this.outgoingEmployee = true;
      this.roleStartDate = true;
      this.roleEndDate = true;
      this.fulfillmentChannelFinal = true;
      this.demandFulfillmentStatus = true;
      this.additionalNotes = true;
      this.bUOfSkill = true;
      this.practice = true;
      this.globalPractice = true;
      this.fte = true;
      this.countryOfDeliveryPrimary = true;
      this.creationDate = true;
      this.updatedOn = true;
      this.weekByStatus = true;
      this.leadtimeInDays = true;
      this.ageing = true;
      this.requestUpdater = true;
      this.teamRequestComment2 = true;
      this.buspHandler = true;
      this.pspHandler = true;
      this.recruiter = true;
      this.deliveryRole = true;
      this.deliverySkills = true;
      this.requestedBy = true;
      this.clientReference = true;
      this.expectedDailyRate = true;
      this.roleComment1 = true;
      this.deliveryType = true;
      this.primaryLocationName = true;
      this.locationDescription = true;
      this.primaryCity = true;
      this.primaryState = true;
      this.primaryZipCode = true;
      this.primaryRegion = true;
      this.primaryGeoName = true;
      this.primaryGeoCity = true;
      this.closestGeoHub = true;
      this.hubSpoke = true;
      this.productionUnit = true;
      this.productionUnitName = true;
      this.targetBillRate = true;
      this.sellingBU = true;
      this.taleoLocationRequisitionLocation = true;
      this.taleoLocationDemandGeo = true;
      this.taleoLocationClientLocation = true;
      this.accountRegion = true;
      this.accountGeoName = true;
      this.accountGeoCity = true;
      this.thorStage = true;
      this.headCountType = true;
      this.s2rManaged = true;
      this.dmdCaseStatus = true;
      this.taskLabel = true;
      this.s2rId = true;
      this.s2rCaseId = true;
      this.candidateCount = true;
      this.assignedTo = true;
      this.teamRequestStatus = true;
      this.thorOptyId = true;
      this.thorContractType = true;
      this.thorProbability = true;
      this.thorCloseDate = true;
      this.thorStartDate = true;
      this.marketUnitBU = true;
      this.requestCreator = true;
      this.leadMarketArea = true;
      this.leadPracticeArea = true;
      this.sourceOfDemand = true;
      this.agedPastDueYN = true;
      this.weekByStatusGrouped = true;
      this.durationInAgedPastStatus = true;
      this.visible = true;
      this.isClientInterviewRequired = true;
      this.excludeOffshoreDcxID = true;
      this.leadMarketAndPracticeAreaSame = true;
      this.forecastType = true;
      this.daysSincePastDue = true;
      this.noOfSelfAppliedApplications = true;
    }
    else {
      this.teamRequestId= true;
      this.positionId = true;
      this.positionName = true;
      this.teamRequestName = true;
      this.localGrade= true;
      this.globalGrade= true;
      this.subSector= true;
      this.microSector = true;
      this.source = false;
      this.demandStatus = false;
      this.recruitingId = false;
      this.bUOfAccount = false;
      this.client = false;
      this.demandType = false;
      this.projectCode = false;
      this.jobName = false;
      this.roleNotes = false;
      this.roleType= false;
      this.backFillReason= false;
      this.outgoingEmployee = false;
      this.roleStartDate= false;
      this.roleEndDate= false;
      this.fulfillmentChannelFinal = false;
      this.demandFulfillmentStatus = false;
      this.additionalNotes= false;
      this.bUOfSkill= false;
      this.practice = false;
      this.globalPractice= false;
      this.fte = false;
      this.countryOfDeliveryPrimary= false;
      this.creationDate = false;
      this.updatedOn = false;
      this.weekByStatus= false;
      this.leadtimeInDays = false;
      this.ageing = false;
      this.requestUpdater= false;
      this.teamRequestComment2= false;
      this.buspHandler= false;
      this.pspHandler = false;
      this.recruiter= false;
      this.deliveryRole = false;
      this.deliverySkills= false;
      this.requestedBy= false;
      this.clientReference= false;
      this.expectedDailyRate = false;
      this.roleComment1 = false;
      this.deliveryType= false;
      this.primaryLocationName = false;
      this.locationDescription= false;
      this.primaryCity= false;
      this.primaryState = false;
      this.primaryZipCode = false;
      this.primaryRegion = false;
      this.primaryGeoName= false;
      this.primaryGeoCity = false;
      this.closestGeoHub = false;
      this.hubSpoke= false;
      this.productionUnit = false;
      this.productionUnitName= false;
      this.targetBillRate= false;
      this.sellingBU= false;
      this.taleoLocationRequisitionLocation = false;
      this.taleoLocationDemandGeo= false;
      this.taleoLocationClientLocation= false;
      this.accountRegion= false;
      this.accountGeoName= false;
      this.accountGeoCity= false;
      this.thorStage= false;
      this.headCountType = false;
      this.s2rManaged= false;
      this.dmdCaseStatus= false;
      this.taskLabel = false;
      this.s2rId = false;
      this.s2rCaseId = false;
      this.candidateCount= false;
      this.assignedTo= false;
      this.teamRequestStatus = false;
      this.thorOptyId= false;
      this.thorContractType = false;
      this.thorProbability = false;
      this.thorCloseDate = false;
      this.thorStartDate = false;
      this.marketUnitBU= false;
      this.requestCreator = false;
      this.leadMarketArea = false;
      this.leadPracticeArea = false;
      this.sourceOfDemand= false;
      this.agedPastDueYN= false;
      this.weekByStatusGrouped = false;
      this.durationInAgedPastStatus = false;
      this.visible= false;
      this.isClientInterviewRequired = false;
      this.excludeOffshoreDcxID= false;
      this.leadMarketAndPracticeAreaSame = false;
      this.forecastType = false;
      this.daysSincePastDue = false;
      this.noOfSelfAppliedApplications = false;
    }
  }

}
