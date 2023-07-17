import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit, AfterViewInit {

  displayColumns: string[] = [ /*'source', 'demandStatus', 'teamRequestId', 'positionId', 'recruitingId', 'bUOfAccount', 'subSector', 'microSector', 'client', 'demandType',
                              'projectCode', 'jobName', 'positionName', 'teamRequestName', 'localGrade', 'globalGrade', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee', 
                              'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
                              'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
                              'deliveryRole','deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
                              'primaryState', 'primaryZipCode', 'primaryRegion','primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
                              'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
                              'taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
                              'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea','leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired','excludeOffshoreDcxID','leadMarketAndPracticeAreaSame','forecastType','action'*/


    'positionId', 'bUOfAccount', 'projectCode', 'source', 'client', 'positionName', 'localGrade', 'globalGrade', 'demandStatus', 'teamRequestId', 'recruitingId', 'subSector', 'microSector', 'demandType',
    'jobName', 'teamRequestName', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee',
    'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
    'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
    'deliveryRole', 'deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
    'primaryState', 'primaryZipCode', 'primaryRegion', 'primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
    'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
    'taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
    'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea', 'leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired', 'excludeOffshoreDcxID', 'leadMarketAndPracticeAreaSame', 'forecastType', 'action']
  dataSource: any;
  user: any;
  

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
