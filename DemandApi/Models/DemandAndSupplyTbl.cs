using System.ComponentModel.DataAnnotations;

namespace DemandApi.Models;

public partial class DemandAndSupplyTbl
{
    public string? Source { get; set; }

    public string? DemandStatus { get; set; }

    public string? TeamRequestId { get; set; }

    public string? PositionId { get; set; }

    public string? RecruitingId { get; set; }

    public string? BuOfAccount { get; set; }

    public string? SubSector { get; set; }

    public string? MicroSector { get; set; }

    public string? Client { get; set; }

    public string? DemandType { get; set; }


    public string? ProjectCode { get; set; }

    public string? JobName { get; set; }

    public string? PositionName { get; set; }

    public string? TeamRequestName { get; set; }

    public string? LocalGrade { get; set; }

    public string? GlobalGrade { get; set; }

    public string? RoleNotes { get; set; }

    public string? RoleType { get; set; }

    public string? BackFillReason { get; set; }

    public string? OutgoingEmployee { get; set; }

    public DateTime? RoleStartDate { get; set; }

    public DateTime? RoleEndDate { get; set; }

    public string? FulfillmentChannelFinal { get; set; }

    public string? DemandFulfillmentStatus { get; set; }

    public string? AdditionalNotes { get; set; }

    public string? BuOfSkill { get; set; }

    public string? Practice { get; set; }

    public string? GlobalPractice { get; set; }

    public string? Fte { get; set; }

    public string? CountryOfDeliveryPrimary { get; set; }

    public DateTime? CreationDate { get; set; }

    public DateTime? UpdatedOn { get; set; }

    public string? WeekByStatus { get; set; }

    public string? LeadtimeInDays { get; set; }

    public string? Ageing { get; set; }

    public string? RequestUpdater { get; set; }

    public string? TeamRequestComment2 { get; set; }

    public string? BuspHandler { get; set; }

    public string? PspHandler { get; set; }

    public string? Recruiter { get; set; }

    public string? DeliveryRole { get; set; }

    public string? DeliverySkills { get; set; }

    public string? RequestedBy { get; set; }

    public string? ClientReference { get; set; }

    public string? ExpectedDailyRate { get; set; }

    public string? RoleComment1 { get; set; }

    public string? DeliveryType { get; set; }

    public string? PrimaryLocationName { get; set; }

    public string? LocationDescription { get; set; }

    public string? PrimaryCity { get; set; }

    public string? PrimaryState { get; set; }

    public string? PrimaryZipCode { get; set; }

    public string? PrimaryRegion { get; set; }

    public string? PrimaryGeoName { get; set; }

    public string? PrimaryGeoCity { get; set; }

    public string? ClosestGeoHub { get; set; }

    public string? HubSpoke { get; set; }

    public string? ProductionUnit { get; set; }

    public string? ProductionUnitName { get; set; }

    public string? TargetBillRate { get; set; }

    public string? SellingBu { get; set; }

    public string? TaleoLocationRequisitionLocation { get; set; }

    public string? TaleoLocationDemandGeo { get; set; }

    public string? TaleoLocationClientLocation { get; set; }

    public string? AccountRegion { get; set; }

    public string? AccountGeoName { get; set; }

    public string? AccountGeoCity { get; set; }

    public string? ThorStage { get; set; }

    public string? HeadCountType { get; set; }

    public string? S2rManaged { get; set; }

    public string? DmdCaseStatus { get; set; }

    public string? TaskLabel { get; set; }

    public string? S2rId { get; set; }

    public string? S2rCaseId { get; set; }

    public string? CandidateCount { get; set; }

    public string? AssignedTo { get; set; }

    public string? TeamRequestStatus { get; set; }

    public string? ThorOptyId { get; set; }

    public string? ThorContractType { get; set; }

    public string? ThorProbability { get; set; }

    public DateTime? ThorCloseDate { get; set; }

    public DateTime? ThorStartDate { get; set; }

    public string? MarketUnitBu { get; set; }

    public string? RequestCreator { get; set; }

    public string? LeadMarketArea { get; set; }

    public string? LeadPracticeArea { get; set; }

    public string? SourceOfDemand { get; set; }

    public string? AgedPastDueYN { get; set; }

    public string? WeekByStatusGrouped { get; set; }

    public string? DurationInAgedPastStatus { get; set; }

    public string? DaysSincePastDue { get; set; }

    public string? NoOfSelfAppliedApplications { get; set; }

    public string? Visible { get; set; }

    public string? IsClientInterviewRequired { get; set; }

    public string? ExcludeOffshoreDcxID { get; set; }

    public bool LeadMarketAndPracticeAreaSame { get; set; }

    public string? ForecastType { get; set; }
}
