using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DemandApi.Models;

public partial class DemandAndSupplyDbContext : DbContext
{
    public DemandAndSupplyDbContext()
    {
    }

    public DemandAndSupplyDbContext(DbContextOptions<DemandAndSupplyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<DemandAndSupplyTbl> DemandAndSupplyTbls { get; set; }

    public virtual DbSet<Resume> Resumes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=LIN25006697\\SQLEXPRESS;Database=DemoDemandAnsSupply;Integrated Security=true;Trusted_Connection=True;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DemandAndSupplyTbl>(entity =>
        {
            entity.HasKey(e => e.PositionId).HasName("PK_DemandAndSupply_Tbl");

            entity.ToTable("DemandAndSupplyTbl");

            entity.Property(e => e.PositionId).HasMaxLength(255);
            entity.Property(e => e.AccountGeoCity)
                .HasMaxLength(255)
                .HasColumnName("Account Geo City");
            entity.Property(e => e.AccountGeoName)
                .HasMaxLength(255)
                .HasColumnName("Account Geo Name");
            entity.Property(e => e.AccountRegion)
                .HasMaxLength(255)
                .HasColumnName("Account Region");
            entity.Property(e => e.AdditionalNotes).HasColumnName("Additional Notes");
            entity.Property(e => e.AgedPastDueYN)
                .HasMaxLength(255)
                .HasColumnName("Aged + Past Due - Y/N");
            entity.Property(e => e.Ageing).HasMaxLength(255);
            entity.Property(e => e.AssignedTo)
                .HasMaxLength(255)
                .HasColumnName("Assigned To");
            entity.Property(e => e.BackFillReason).HasMaxLength(255);
            entity.Property(e => e.BuOfAccount)
                .HasMaxLength(255)
                .HasColumnName("BU of Account");
            entity.Property(e => e.BuOfSkill)
                .HasMaxLength(255)
                .HasColumnName("BU of Skill");
            entity.Property(e => e.BuspHandler)
                .HasMaxLength(255)
                .HasColumnName("BUSP Handler");
            entity.Property(e => e.CandidateCount)
                .HasMaxLength(255)
                .HasColumnName("Candidate Count");
            entity.Property(e => e.Client).HasMaxLength(255);
            entity.Property(e => e.ClientReference)
                .HasMaxLength(255)
                .HasColumnName("Client Reference");
            entity.Property(e => e.ClosestGeoHub)
                .HasMaxLength(255)
                .HasColumnName("Closest Geo Hub");
            entity.Property(e => e.CountryOfDeliveryPrimary)
                .HasMaxLength(255)
                .HasColumnName("Country of Delivery (Primary) ");
            entity.Property(e => e.CreationDate)
                .HasColumnType("datetime")
                .HasColumnName("Creation Date");
            entity.Property(e => e.DaysSincePastDue)
                .HasMaxLength(255)
                .HasColumnName("Days since Past Due");
            entity.Property(e => e.DeliveryRole)
                .HasMaxLength(255)
                .HasColumnName("Delivery Role");
            entity.Property(e => e.DeliverySkills)
                .HasMaxLength(255)
                .HasColumnName("Delivery Skills");
            entity.Property(e => e.DeliveryType)
                .HasMaxLength(255)
                .HasColumnName("Delivery Type");
            entity.Property(e => e.DemandFulfillmentStatus)
                .HasMaxLength(255)
                .HasColumnName(" Demand Fulfillment Status");
            entity.Property(e => e.DemandStatus)
                .HasMaxLength(255)
                .HasColumnName("Demand Status");
            entity.Property(e => e.DemandType)
                .HasMaxLength(255)
                .HasColumnName("Demand Type");
            entity.Property(e => e.DmdCaseStatus)
                .HasMaxLength(255)
                .HasColumnName("DMD Case Status");
            entity.Property(e => e.DurationInAgedPastStatus)
                .HasMaxLength(255)
                .HasColumnName("Duration in aged past Status");
            entity.Property(e => e.ExcludeOffshoreDcxID)
                .HasMaxLength(255)
                .HasColumnName("Exclude Offshore DCX/I&D");
            entity.Property(e => e.ExpectedDailyRate)
                .HasMaxLength(255)
                .HasColumnName("Expected Daily Rate");
            entity.Property(e => e.ForecastType)
                .HasMaxLength(255)
                .HasColumnName("Forecast Type");
            entity.Property(e => e.Fte)
                .HasMaxLength(255)
                .HasColumnName("FTE");
            entity.Property(e => e.FulfillmentChannelFinal)
                .HasMaxLength(255)
                .HasColumnName("Fulfillment Channel Final");
            entity.Property(e => e.GlobalGrade)
                .HasMaxLength(255)
                .HasColumnName("Global Grade");
            entity.Property(e => e.GlobalPractice)
                .HasMaxLength(255)
                .HasColumnName("Global Practice");
            entity.Property(e => e.HeadCountType).HasMaxLength(255);
            entity.Property(e => e.HubSpoke)
                .HasMaxLength(255)
                .HasColumnName("Hub/Spoke");
            entity.Property(e => e.IsClientInterviewRequired)
                .HasMaxLength(255)
                .HasColumnName("Is Client Interview Required");
            entity.Property(e => e.JobName)
                .HasMaxLength(255)
                .HasColumnName("Job Name");
            entity.Property(e => e.LeadMarketAndPracticeAreaSame).HasColumnName("Lead Market and Practice area same");
            entity.Property(e => e.LeadMarketArea).HasMaxLength(255);
            entity.Property(e => e.LeadPracticeArea).HasMaxLength(255);
            entity.Property(e => e.LeadtimeInDays)
                .HasMaxLength(255)
                .HasColumnName("Leadtime in Days");
            entity.Property(e => e.LocalGrade)
                .HasMaxLength(255)
                .HasColumnName("Local Grade");
            entity.Property(e => e.LocationDescription)
                .HasMaxLength(255)
                .HasColumnName("Location Description");
            entity.Property(e => e.MarketUnitBu)
                .HasMaxLength(255)
                .HasColumnName("Market Unit BU");
            entity.Property(e => e.MicroSector)
                .HasMaxLength(255)
                .HasColumnName("Micro Sector");
            entity.Property(e => e.NoOfSelfAppliedApplications)
                .HasMaxLength(255)
                .HasColumnName("No# of Self-Applied Applications");
            entity.Property(e => e.OutgoingEmployee)
                .HasMaxLength(255)
                .HasColumnName("Outgoing Employee");
            entity.Property(e => e.PositionName)
                .HasMaxLength(255)
                .HasColumnName("Position Name");
            entity.Property(e => e.Practice).HasMaxLength(255);
            entity.Property(e => e.PrimaryCity)
                .HasMaxLength(255)
                .HasColumnName("Primary City");
            entity.Property(e => e.PrimaryGeoCity)
                .HasMaxLength(255)
                .HasColumnName("Primary Geo City ");
            entity.Property(e => e.PrimaryGeoName)
                .HasMaxLength(255)
                .HasColumnName("Primary Geo Name ");
            entity.Property(e => e.PrimaryLocationName)
                .HasMaxLength(255)
                .HasColumnName("Primary Location Name");
            entity.Property(e => e.PrimaryRegion)
                .HasMaxLength(255)
                .HasColumnName("Primary Region");
            entity.Property(e => e.PrimaryState)
                .HasMaxLength(255)
                .HasColumnName("Primary State ");
            entity.Property(e => e.PrimaryZipCode)
                .HasMaxLength(255)
                .HasColumnName("Primary Zip Code ");
            entity.Property(e => e.ProductionUnit)
                .HasMaxLength(255)
                .HasColumnName("Production Unit");
            entity.Property(e => e.ProductionUnitName)
                .HasMaxLength(255)
                .HasColumnName("Production Unit Name");
            entity.Property(e => e.ProjectCode)
                .HasMaxLength(255)
                .HasColumnName("Project Code");
            entity.Property(e => e.PspHandler)
                .HasMaxLength(255)
                .HasColumnName("PSP Handler");
            entity.Property(e => e.Recruiter).HasMaxLength(255);
            entity.Property(e => e.RecruitingId)
                .HasMaxLength(255)
                .HasColumnName("Recruiting ID");
            entity.Property(e => e.RequestCreator).HasMaxLength(255);
            entity.Property(e => e.RequestUpdater)
                .HasMaxLength(255)
                .HasColumnName("Request Updater");
            entity.Property(e => e.RequestedBy)
                .HasMaxLength(255)
                .HasColumnName("Requested By");
            entity.Property(e => e.RoleComment1)
                .HasMaxLength(255)
                .HasColumnName("Role Comment 1");
            entity.Property(e => e.RoleEndDate)
                .HasColumnType("datetime")
                .HasColumnName("Role End Date");
            entity.Property(e => e.RoleNotes).HasColumnName("Role Notes");
            entity.Property(e => e.RoleStartDate)
                .HasColumnType("datetime")
                .HasColumnName("Role Start Date");
            entity.Property(e => e.RoleType)
                .HasMaxLength(255)
                .HasColumnName("Role Type");
            entity.Property(e => e.S2rCaseId)
                .HasMaxLength(255)
                .HasColumnName("S2R Case ID");
            entity.Property(e => e.S2rId)
                .HasMaxLength(255)
                .HasColumnName("S2R ID");
            entity.Property(e => e.S2rManaged)
                .HasMaxLength(255)
                .HasColumnName("S2R managed");
            entity.Property(e => e.SellingBu)
                .HasMaxLength(255)
                .HasColumnName("Selling BU");
            entity.Property(e => e.Source).HasMaxLength(255);
            entity.Property(e => e.SourceOfDemand)
                .HasMaxLength(255)
                .HasColumnName("Source of Demand");
            entity.Property(e => e.SubSector)
                .HasMaxLength(255)
                .HasColumnName("Sub-Sector");
            entity.Property(e => e.TaleoLocationClientLocation)
                .HasMaxLength(255)
                .HasColumnName("Taleo Location: Client Location");
            entity.Property(e => e.TaleoLocationDemandGeo)
                .HasMaxLength(255)
                .HasColumnName("Taleo Location: Demand Geo");
            entity.Property(e => e.TaleoLocationRequisitionLocation)
                .HasMaxLength(255)
                .HasColumnName("Taleo Location: Requisition Location");
            entity.Property(e => e.TargetBillRate)
                .HasMaxLength(255)
                .HasColumnName("Target Bill Rate");
            entity.Property(e => e.TaskLabel)
                .HasMaxLength(255)
                .HasColumnName("Task Label");
            entity.Property(e => e.TeamRequestComment2)
                .HasMaxLength(255)
                .HasColumnName("Team Request Comment 2");
            entity.Property(e => e.TeamRequestId).HasMaxLength(255);
            entity.Property(e => e.TeamRequestName)
                .HasMaxLength(255)
                .HasColumnName("Team Request Name");
            entity.Property(e => e.TeamRequestStatus).HasMaxLength(255);
            entity.Property(e => e.ThorCloseDate)
                .HasColumnType("datetime")
                .HasColumnName("THOR Close Date");
            entity.Property(e => e.ThorContractType)
                .HasMaxLength(255)
                .HasColumnName("THOR Contract Type");
            entity.Property(e => e.ThorOptyId)
                .HasMaxLength(255)
                .HasColumnName("THOR Opty Id");
            entity.Property(e => e.ThorProbability)
                .HasMaxLength(255)
                .HasColumnName("THOR Probability");
            entity.Property(e => e.ThorStage)
                .HasMaxLength(255)
                .HasColumnName("THOR Stage");
            entity.Property(e => e.ThorStartDate)
                .HasColumnType("datetime")
                .HasColumnName("THOR Start Date");
            entity.Property(e => e.UpdatedOn)
                .HasColumnType("datetime")
                .HasColumnName("Updated On");
            entity.Property(e => e.Visible).HasMaxLength(255);
            entity.Property(e => e.WeekByStatus)
                .HasMaxLength(255)
                .HasColumnName("Week by Status");
            entity.Property(e => e.WeekByStatusGrouped)
                .HasMaxLength(255)
                .HasColumnName("Week By Status - Grouped");
        });

        modelBuilder.Entity<Resume>(entity =>
        {
            entity.Property(e => e.PositionId).HasMaxLength(255);

            entity.HasOne(d => d.Position).WithMany(p => p.Resumes)
                .HasForeignKey(d => d.PositionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Resumes_DemandAndSupplyTbl");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
