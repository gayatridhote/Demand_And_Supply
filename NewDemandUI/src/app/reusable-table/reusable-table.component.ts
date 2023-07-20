import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDisplayComponent } from '../user-display/user-display.component';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent {


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


    'positionId', 'bUOfAccount', /*'projectCode', 'source', 'client', 'positionName', 'localGrade', 'globalGrade', 'demandStatus', 'teamRequestId', 'recruitingId', 'subSector', 'microSector', 'demandType',
    'jobName', 'teamRequestName', 'roleNotes', 'roleType', 'backFillReason', 'outgoingEmployee',
    'roleStartDate', 'roleEndDate', 'fulfillmentChannelFinal', 'demandFulfillmentStatus', 'additionalNotes', 'bUOfSkill', 'practice', 'globalPractice', 'fte', 'countryOfDeliveryPrimary',
    'creationDate', 'updatedOn', 'weekByStatus', 'leadtimeInDays', 'ageing', 'requestUpdater', 'teamRequestComment2', 'buspHandler', 'pspHandler', 'recruiter',
    'deliveryRole', 'deliverySkills', 'requestedBy', 'clientReference', 'expectedDailyRate', 'roleComment1', 'deliveryType', 'primaryLocationName', 'locationDescription', 'primaryCity',
    'primaryState', 'primaryZipCode', 'primaryRegion', 'primaryGeoName', 'primaryGeoCity', 'closestGeoHub', 'hubSpoke', 'productionUnit', 'productionUnitName', 'targetBillRate',
    'sellingBU', 'taleoLocationRequisitionLocation', 'taleoLocationDemandGeo', 'taleoLocationClientLocation', 'accountRegion', 'accountGeoName', 'accountGeoCity', 'thorStage', 'headCountType', 's2rManaged',
    'taskLabel', 's2rId', 's2rCaseId', 'candidateCount', 'assignedTo', 'teamRequestStatus', 'thorOptyId', 'thorContractType', 'thorProbability', 'thorCloseDate',
    'thorStartDate', 'marketUnitBU', 'requestCreator', 'leadMarketArea', 'leadPracticeArea', 'sourceOfDemand', 'agedPastDueYN', 'weekByStatusGrouped', 'durationInAgedPastStatus', 'daysSincePastDue',
'noOfSelfAppliedApplications', 'visible', 'isClientInterviewRequired', 'excludeOffshoreDcxID', 'leadMarketAndPracticeAreaSame', 'forecastType', 'action'*/]

columnsToDisplay: string[] = this.displayColumns.slice();
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

