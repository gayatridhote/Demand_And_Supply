using System;
using System.Collections.Generic;

namespace DemandApi.Models;

public partial class Resume
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public string ResumeFilePath { get; set; } = null!;

    public string PositionId { get; set; } = null!;

    public virtual DemandAndSupplyTbl Position { get; set; } = null!;
}
