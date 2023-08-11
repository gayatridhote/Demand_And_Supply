using System.Net.Mail;
using DemandApi.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;

namespace DemandApi.Controllers
{
    public class DisplayForAdminController : BaseApiController
    {
        private readonly DemandAndSupplyDbContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IWebHostEnvironment _environment;

        public DisplayForAdminController(DemandAndSupplyDbContext context,
                                          IHttpContextAccessor httpContextAccessor,
                                          IWebHostEnvironment environment
                                          )
        {
            _environment = environment;

            _httpContextAccessor = httpContextAccessor;
            _context = context;

        }

//to get all data from database
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var demand = await _context.DemandAndSupplyTbls.ToListAsync();
            return Ok(demand);
        }


//To get data according to position id
        [HttpGet("GetByPositionId/{id}")]
        public async Task<ActionResult<IEnumerable<DemandAndSupplyTbl>>> GetByPositionId(string id)
        {
            var demand = await _context.DemandAndSupplyTbls.FirstOrDefaultAsync(x => x.PositionId == id);
            return Ok(demand);

        }

        
        //To upload and save resume and send mail 
        [HttpPost("UploadResume")]
        public async Task<ActionResult> UploadResume([FromForm]IFormFile Resume,[FromForm] string positionId)
        {

            bool Result = false;
//to fetch file from frontend
            string FileName = Resume.FileName;
            string FilePath = GetFilePath(positionId);;
            if (!System.IO.Directory.Exists(FilePath))
            {
                System.IO.Directory.CreateDirectory(FilePath);
            }
            string resumepath = FilePath + "\\" + positionId + FileName;
            //to save file in folder
            using (FileStream stream = System.IO.File.Create(resumepath))
            {
                await Resume.CopyToAsync(stream);
                

                //to save file details in database
                var resume = new  Resume
                {
                    ResumeFilePath = resumepath,
                    PositionId = positionId
                };
                _context.Resumes.Add(resume);
                await _context.SaveChangesAsync();

                // to send mail
                SendEmail(positionId);


                Result=true;    
                return Ok(Result);
            }
        }
        [NonAction]
        private string GetFilePath(string PositionId)
        {
            return this._environment.WebRootPath + "\\Uploads\\Resumes\\" + PositionId;
        }



        [NonAction]
        public void SendEmail(string positionId)
        {
            var  email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("gayatridhote996@gmail.com"));
            email.To.Add(MailboxAddress.Parse("gayatri.dhote@capgemini.com"));
            email.Subject= "Testing mail sending";
            email.Body= new  TextPart(TextFormat.Html) {Text = "Resume for " + positionId + "has been submitted."}; 

            using var  smtp =  new MailKit.Net.Smtp.SmtpClient();
            smtp.Connect("smtp.gmail.com",587,SecureSocketOptions.StartTls);
            smtp.Authenticate("gayatridhote996@gmail.com","vrdr thwk inxb xpqf");
            smtp.Send(email);
            smtp.Disconnect(true);
            return ;
        }


    //    [HttpPost("SendMail")]
    //     public async Task<IActionResult> SendMail(string positionId )
    //     {
    //         MailMessage mail = new MailMessage();

    //         mail.From = new MailAddress("gayatridhote996@gmail.com");
    //         mail.To.Add("nisha.kakade@capgemini.com");
    //         mail.Subject= "just wanted to say hi";
    //         mail.CC.Add("aishwarya-dilip.patil@capgemini.com");
    //         mail.IsBodyHtml=true;
    //         string content = "Hi. this is me Gayatri Dhote.";
    //         mail.Body=content;

    //         SmtpClient smtpClient = new  SmtpClient("mail.gmail.com");
    //         NetworkCredential networkCredential = new NetworkCredential("gayatridhote996@gmail.com","Gdhote@24");
    //         smtpClient.UseDefaultCredentials = false;
    //         smtpClient.Credentials = networkCredential;
    //         smtpClient.Port = 25;
    //         smtpClient.EnableSsl = false;

    //         smtpClient.Send(mail);

    //         ModelState.Clear();

    //         return  Ok(true);
              
    //     }
        // [NonAction]
        // private string SendEmail(string PositionId){

            
        //     MailMessage mail = new MailMessage();

        //     mail.From = new MailAddress("dhotegayatri24@gmail.com");
        //     mail.To.Add("nisha.kakade@capgemini.com");
        //     mail.Subject= "just wanted to say hi";
        //     mail.CC.Add("aishwarya-dilip.patil@capgemini.com");
        //     mail.IsBodyHtml=true;
        //     string content = "Hi. this is me Gayatri Dhote.";
        //     mail.Body=content;

        //     SmtpClient smtpClient = new  SmtpClient("mail.gmail.com");
        //     NetworkCredential networkCredential = new NetworkCredential("dhotegayatri24@gmail.com","Gdhote@24");
        //     smtpClient.UseDefaultCredentials = false;
        //     smtpClient.Credentials = networkCredential;
        //     smtpClient.Port = 25;
        //     smtpClient.EnableSsl = false;

        //     smtpClient.Send(mail);

        //     ModelState.Clear();

        //     return("Mail Send");


        // }

    }



}