import { JobType } from './job-type';

export class JobData {
  myJobs: JobType[] = [
    {
      jobId: '5',
      jobUrl: 'AMD',
      jobName: 'Firmware Engineer II',
      company: 'Advanced Micro Devices',
      duration: 'Sep 2022 to Sep 2023',
      description: [
        'Developed and maintained high performance stress tests across AMD product lines including CPU, GPU and APU',
        'Led the design and validation of a critical test suite to prove reliability for MI300, a generative AI server chip',
        'Collaborated with cross-functional teams by providing technical support to investigate and debug crashes, errors, failures and performance issues for hardware stress tests, delivering under tight deadlines',
        'Performed test time reduction and correlation studies on defective parts to improve the diag team’s ability to catch errors and improve validation speed by tuning parameters such as temperature, voltage and clock speeds',
        'Enabled testing on a suite of hardware systems by flashing firmware, installing Linux, and setting up SSH',
        'Wrote and optimized a multithreaded C++ system memory integrity check tool to debug and accurately pinpoint kernel memory corruption failure discovered by an external team',
      ],
      picture: '../../assets/imgs/work_imgs/amd.png',
    },
    {
      jobId: '4',
      jobUrl: 'BofA',
      jobName: 'Software Engineer Intern',
      company: 'Bank of America Merrill Lynch',
      duration: 'May 2021 to Aug 2021',
      description: [
        'Developed and maintained investment analysis platform for traders',
        'Automated application deployment for CI/CD using Ansible and Jenkins tools',
        'Improved unit and integration testing coverage by 41% using Jasmine',
        'Restructured major Angular components into separate Node.js packages promote cross-team collaboration, reducing build time from 18 mins to 2 mins',
      ],
      picture: '../../assets/imgs/work_imgs/bofaml.png',
    },
    {
      jobId: '3',
      jobUrl: 'BMO',
      jobName: 'Software Developer Intern',
      company: 'Bank of Montreal',
      duration: 'Sept 2020 to Dec 2020',
      description: [
        'Overhauled legacy mortgage billing software by designing a modern web app',
        'Performed full stack development with ASP.NET, C#, SQL, JavaScript and Bootstrap',
        'Enforced client and server side form validation logic with Regex and C# ',
        'Refined software specifications with customers to clarify interface requirements',
        'Performed database management programming with ADO.NET, Microsoft SQL Server Management Studio, stored procedures and queries',
        'Presented a COVID-19 Innovation Challenge case competition solution with a group of five as a part of the BMO internship program',
      ],
      picture: '../../assets/imgs/work_imgs/bmo_logo.jpg',
    },
    {
      jobId: '2',
      jobUrl: 'Ignis',
      jobName: 'Embedded Software Engineer Intern',
      company: 'Ignis Innovation',
      duration: 'Jan 2020 to Mar 2020',
      description: [
        'Developed Android OS graphics drivers to include MaxLife pixel compensation to reduce pixel burnout',
        'Investigated computational load of algorithm during real time video playback',
        'Extended IGNIS’s bare metal C application to read PNG image data from flash memory, then process and send it to the frame buffer to be displayed',
      ],
      picture: '../../assets/imgs/work_imgs/ignis_logo.png',
    },
    {
      jobId: '1',
      jobUrl: 'ATSLifeSciences',
      jobName: 'Automation Systems Designer Intern',
      company: 'ATS Life Sciences Automation',
      duration: 'May 2019 to Aug 2019',
      description: [
        'Designed and tested automated Lyophilized bead dispense process meeting ISO 13408 standard by analyzing robot speed and end effector alternatives',
        'Calculated production line tooling requirements by performing cycle time analysis using Design Specification',
        'Performed root cause analysison high precision stent cutting process',
        'Validated manufacturing line specs during Factory Acceptance Tests',
      ],
      picture: '../../assets/imgs/work_imgs/ats_logo.jpg',
    },
    {
      jobId: '0',
      jobUrl: 'uWaterloo',
      jobName: 'Junior Web Developer',
      company: 'University of Waterloo',
      duration: 'Jan 2018 to Apr 2018',
      description: [
        'Improved and refactored a course evaluation metrics dashboard by using PHP, SQL, HTML, CSS and Bootstrap',
        'Led the development of a web app to flag profanity, reducing processing time from 3+ hours to 30 mins',
        'Streamlined onboarding for future workers by writing documentation describing setup process',
      ],
      picture: '../../assets/imgs/work_imgs/waterloo.png',
    },
  ];
  /**
   *
   * @param id :url parameter to load the corresponding page
   * @returns
   */
  public getJobFromId(id: any) {
    for (let job of this.myJobs) {
      if (job.jobUrl == id) {
        return job;
      }
    }
    return null;
  }
}
