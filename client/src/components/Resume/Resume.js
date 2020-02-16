import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Resume = (props) => {
	const {
		buttonLabel,
		className
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="danger" onClick={toggle}>Resume</Button>
			<Modal size="lg" isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader className="bg-dark text-light" toggle={toggle}>Jason Martin</ModalHeader>
				<ModalBody className="bg-secondary text-light">
					<p>8512 Hackamore Road ● Littleton, CO 80125</p>
					<p>303.907.5882 ● jmart004@protonmail.com</p>
					<hr></hr>
						<h5><strong>Sr. Principal Security Engineer</strong></h5>
						<ul>
							<li>Implement<strong><em> Security</em></strong> solutions across multiple single-tenant and multi-tenants cloud environments.</li>
							<li>Certified Ethical Hacking (<strong><em>CEH</em></strong>) certified.</li>
							<li>Excellent<strong><em> Engineering</em></strong> skills, experienced in AWS cloud, engineering high availability solutions, auto-scaling, infrastructure as code, CI/CD, IAM roles and security policies, unix virtualization, troubleshooting, securing, documentation, and performance tracking in a global UNIX-based environment.</li>
							<li>Expert knowledge of <strong><em>UNIX</em></strong> systems, including installation, user administration, file security, process control, file systems, disk maintenance, redundancy, virtualization, backup and recovery, networking, logging, DNS, and security benchmarking.</li>
							<li>Proven <strong><em>Networking</em></strong> abilities, with proficiency in AWS, Route 53, routers, and switches.</li>
							<li>Strong <strong><em>Interpersonal </em></strong>skills, with passion and motivation to learn about all areas of security, cloud engineering and design. Flexible and adaptable with outstanding organizational and planning capacities.</li>
						</ul>
					<hr></hr>
							<h5><strong>Technical Expertise</strong></h5>
							<p><strong>Cloud:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>AWS EC2, route53, S3, VPC, ELB/ALB, RDS, Cloudwatch, Cloudtrail, IAM Secrets Manager and Certificate Manager</p>
							<p><strong>Platforms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Centos 6/7, Solaris 10/11 and Red Hat Enterprise Linux 5/6</p>
							<p><strong>Software:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Imperva WAF, BRO IDS, OSSEC, Chef, Git, Terraform, Docker, Artifactory, Nginx Hashicorp Vault, Consul, Packer, Vagrant and Jenkins</p>
							<p><strong>Dev Tools:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Test Kitchenci, eslint</p>
							<p><strong>Security:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Kali Linux, Metasploit, Burp Suite Professional, nmap and netcat</p>
							<p><strong>Languages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Python, JavaScript, Handlebars, Terraform, Ruby, Shell HTML, CSS</p>
							<p><strong>Databases:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>MySQL, MongoDB</p>
							<p><strong>Frameworks:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Express.js, jQuery, Bootstrap, Materialize</p>
							<p><strong>File
								Systems:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>ext3, ufs, zfs, lvm, cfs, nfs, hsfs</p>
							<p><strong>Hardware:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Cisco UCS C240 M3, Sun/Oracle (CMT) T-Series, Sun/Oracle Enterprise M-Series, Sun/Oracle x86 series, HP ProLiant Blade, HP DL3xx and HP DL5xx.</p>
					<hr></hr>
								<h5><strong>Professional Experience</strong></h5>
								<p>Infor, New York , NY &ndash; (remote)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dec. 2017-present</p>
								<h6><strong>Sr. Principal Security Engineer</strong></h6>
								<p>Evaluated security solutions for credential management and web application firewalls (WAF). Documentation and implementation of Imperva WAF.&nbsp; Splunk and Sumo Logic security alerts for common threat use cases.&nbsp; Weekly audits of security tool deployment. &nbsp;Security Architecture reviews and Incident response. Work closely with multiple application teams on security compliance.</p>
					<hr></hr>
									<p>AUTODESK INC, San Francisco, CA &ndash; (remote)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; June 2015-Dec. 2017</p>
									<h6><strong>Principal DevOps Engineer</strong></h6>
									<p>Engineered and deployed Jfrog&rsquo;s Artifactory repository for CI/CD builds, security patching and Docker registry.&nbsp; Engineered and deployed HashiCorp Vault infrastructure for securely storing tokens, passwords, certificates, API keys, and any other secrets.</p>
									<p>Utilized Terraform for infrastructure-as-code, Git, Chef and Jenkins for continuous integration and deployment of these services. Deployed BRO IDS for the east and west coast data centers.</p>
									<p>Engaged in POC&rsquo;s for SaltStack and OSSEC.</p>
					<hr></hr>
										<p>ERICSSON INC, Plano, TX &ndash; (remote)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; April 2013-June 2015</p>
										<h6><strong>Senior Systems Engineer, System Specialist III, Managed Services
											Infrastructure Lead</strong></h6>
										<p>Lead Engineer supporting Cricket Communications operations and new T-Mobile billing initiative.</p>
										<p>IT Server Engineering (ITSE) Cricket team lead responsible for ten employees covering the Windows, SAN, backup and VMWare environments. Manage contractors and delegate workloads across a global team.&nbsp; 24/7 operational support.&nbsp; Work closely with the Network Engineering, Security Compliance and Application teams. &nbsp;Design and implemented a new data warehouse solution for legacy Cricket for AT&amp;T transition.&nbsp;</p>
										<p>Building highly available VERITAS clusters with replication per Ericsson Solution Architect requirements. Early life support for new Ericsson T-Mobile billing solution.&nbsp; Designing and implementing tools platform for Ericsson Managed Services.</p>
					<hr></hr>
											<p>CRICKET COMMUNICATIONS, Greenwood Village, CO&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sept. 2008-April 2013</p>
											<h6><strong>Senior Systems Engineer</strong></h6>
											<p>One of two Engineers supporting over 1600 Solaris and Red Hat UNIX systems.&nbsp; Assist in managing and negotiating license agreements for Symantec, Oracle and Red Hat. Lead engineer in production billing migration of a 25TB database. Built numerous Veritas RAC clusters to support Cricket&rsquo;s back office infrastructure.&nbsp; Consolidated multiple environments into Solaris zones for QA, build, and user acceptance testing.&nbsp; Integrated Delphix virtual database appliance into Cricket&rsquo;s environment to reduce storage footprint. Built syslog-ng server for centralized logging of SOX in-scope servers.&nbsp; Performed system and network transfer testing for new billing system.&nbsp; Implemented UNIX Uptime monitoring system.&nbsp; Automated system alerts for tier 1 support team.&nbsp; Lead engineer for new Billing shadow facility roll-out.&nbsp; Lead engineer for database virtualization software and automation.&nbsp; Lead engineer on data center migration from San Diego to Denver. Continually automate processes with Shell and Perl scripts.&nbsp; Oversee the Denver data center.&nbsp; Always exceed or meet critical deadlines. Participate in a 24/7 on call rotation. Negotiate with vendors for better pricing on hardware.</p>
											<ul>
												<li>Reduced downtime for system patching using Solaris Live Upgrade.</li>
												<li>Implemented virtual database software reducing Cricket&rsquo;s storage footprint.</li>
												<li>Automation for quick system and virtual database deployment.</li>
												<li>Authored environment and build documentation.</li>
												<li>Built and support a number of systems for multi-million-dollar billing initiative.</li>
												<li>Performed Oracle CRS upgrades under tight deadlines.</li>
												<li>Migrated systems from UFS to ZFS and VXFS to ZFS.</li>
												<li>Racked and cabled all servers in the Denver datacenter.</li>
												<li>Built Apache web server for scripts, tools, and Solaris wanboot.</li>
											</ul>
					<hr></hr>
												<p>LEVEL 3 COMMUNICATIONS, LLC Broomfield, CO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Oct. 2004 &ndash; Sept. 2008</p>
												<h6><strong>Infrastructure Engineer Senior</strong></h6>
												<p>Built new email infrastructure utilizing MessageLabs virus and spam filtering.&nbsp; Consolidated UNIX email relays from eight to three.&nbsp; Maintain UNIX systems internal email.&nbsp; Assist in email migrations when pertaining to UNIX systems.&nbsp; Lead Engineer for HP Server Automation roll-out.&nbsp; Built new HP Server Automation wanboot system for UNIX OS provisioning.&nbsp; Engineering tools for package deployment through HP Server Automation. Engineering tools for virtual Solaris zones through HP Server Automation.&nbsp; Build and deploy development, test and production UNIX servers. 24x7 production support.&nbsp; Provide system and engineer support for QA and development labs.&nbsp; Engineered new development lab consisting of more than 30 servers.&nbsp; System and call flow troubleshooting with SIP and MGCP protocols on a Voice Over IP network (VOIP).&nbsp; Maintain servers, upgrade, patches, and security.&nbsp; Solaris 10 prototype for Level 3 proprietary software applications. Bench-marked Sun Netra T2000 hardware for DNS caching servers running Bind 9.</p>
												<ul>
													<li>Evaluated multiple third-party software applications for the IT organization.</li>
													<li>Implemented remote administration.</li>
													<li>Authored lab environment build documentation.</li>
													<li>Configured network switches and terminal servers.</li>
													<li>Installed and configured third party VOIP software.</li>
													<li>Built Apache web servers for user and administration software portals.</li>
													<li>Built Solaris 10 prototype server for application testing virtual interfaces and zones.</li>
													<li>Automation for Solaris 10 zone builds.</li>
												</ul>
					<hr></hr>
													<p>EDS, Sun Microsystems, Broomfield,
														CO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aug.2004 &ndash; Oct. 2004</p>
													<h6><strong>Senior UNIX Systems Administrator/Contractor</strong></h6>
													<p>Provide system support for over 1700 Sun Microsystems UNIX servers globally. Support
														customer requirements, system troubleshooting and maintenance.</p>
					<hr></hr>
														<p>GLOBAL CROSSING TELECOMMUNICATIONS, Inc. Denver, CO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000 &ndash;2004</p>
														<h6><strong>Senior VOIP UNIX Systems Engineer</strong></h6>
														<p>Provide system support for over 200 UNIX servers on a global scale, conducting initial builds, deployment, troubleshooting and monitoring.&nbsp; Maintain server uptime and track failures, upgrading software, patches, and firmware.&nbsp; Act as technical lead in the augmentation of NFS servers, handling scheduling, resource procurement, and installation.&nbsp; Software and OS system security, and firewall administration.</p>
														<ul>
															<li>Created remote procedure for independent upgrade from Solaris 2.6 to 2.8, resulting in decreased shipping and labor costs.</li>
															<li>Firewall administration using both Checkpoint Firewall-1 on Solaris and IP Tables on Debian Linux.</li>
															<li>Authored documentation and method of procedures for system change maintenance.</li>
															<li>Liaised with switch technicians to troubleshoot and resolve site problems.</li>
															<li>Coordinated solutions for escalated system problems with technical support.</li>
															<li>Built images and operating systems for the testing group.</li>
															<li>Reconfigured network monitoring application to notify via page regarding server problems.</li>
															<li>Initiated jump-start server to add new machines more efficiently.</li>
															<li>Demonstrated reliability and ability to learn quickly in rapid growth from PC technician responsibilities to senior level UNIX administration.</li>
														</ul>
					<hr></hr>
															<p>SIENNA IMAGING, INC. (Graytag Imaging), Denver, CO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1998 &ndash; 2000</p>
															<h6><strong>Application Support Technician</strong></h6>
															<p>Installed software and trained customers internationally for this digital printing company, supporting applications and operating systems for 150 customers.</p>
															<ul>
																<li>Constructed small networks using TCP/IP and Dave software.</li>
																<li>Resolved problems quickly and efficiently to maintain positive client relationships.</li>
																<li>Worked closely with engineering testing newly developed software.</li>
															</ul>
															<h5>Education &amp; Training</h5>
															<p><strong>Associate of Applied Science in Computer Networking, </strong><em>GPA 4.0</em></p>
															<p>Westwood College of Technology, Denver, CO, 1999</p>
															<p>Associate of Occupational Studies, Emphasis in Graphic Design</p>
															<p>Platt College, Aurora, CO, 1995</p>
					<hr></hr>
																<h5>Professional Training:</h5>
																<ul>
																	<li>Full Stack Web Development &ndash; Denver University, Aug 2019 - Present</li>
																	<li>Splunk Conf &ndash; Orlando, 2019</li>
																	<li>Black Hat &ndash; Las Vegas, 2016, 2017</li>
																	<li>Defcon &ndash; Las Vegas 2016</li>
																	<li>Offensive Security &ndash; Online 2016</li>
																	<li>ITILv3 Foundations Certified &ndash; Global Knowledge, 2014</li>
																	<li>Red Hat System Administration III - Red Hat Online, 2013</li>
																	<li>Red Hat System Troubleshooting &ndash; Red Hat Online 2013</li>
																	<li>Oracle Real Application Clusters 11gR2, Oracle, 2011</li>
																	<li>Red Hat for Solaris Administrators, - Red Hat Online, 2010</li>
																	<li>Solaris System Performance &ndash; Sun Microsystems, 2010</li>
																	<li>VERITAS Cluster 5.0 &ndash; Symantec, 2009</li>
																	<li>VERITAS File System 5.0 &ndash; Symantec, 2009</li>
																	<li>Systems Administration I, Solaris 2.7 - Sun Microsystems, 2000</li>
																	<li>Systems Administration II, Solaris 2.8 - Sun Microsystems, 2001</li>
																	<li>SANS Security Institute &ndash; New Orleans, 2001</li>
																	<li>SANS Security Institute &ndash; Denver, 2004</li>
																</ul>
					<hr></hr>
																	<h5>Awards:</h5>
																	<p>IT leadership Awards and Recognition:</p>
																	<p>Infor recongnition&rdquo;RAVING Award&rdquo; 2019</p>
																	<p>Autodesk recognition&ldquo;Applause Award&rdquo; 2016</p>
																	<p>Autodesk recognition&ldquo;Applause Award&rdquo; 2016</p>
																	<p>Ericsson &ldquo;Exceptional Performer&rdquo; Annual Review 2014</p>
																	<p>Cricket Employee Project Performance Award 2011 Billing System</p>
																	<p>Cricket Employee Project Performance Award 2010 The Best System Performance on Record</p>
																	<p>Cricket Employee Project Performance Award 2010 Next Generation Business Model</p>
																	<p>Cricket Employee Project Performance Award 2010 Point of Sale</p>
																	<p>Global Crossing Employee Recognition Award 2003</p>
					<hr></hr>
																		<h5>Personal:</h5>
																		<p><em>Youth Protection Committee Chair - Assumption Greek Orthodox Cathedral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2014</em></p>
																		<p><em>Parish Council &ndash; Assumption Greek Orthodox Cathedral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2013 &ndash; 2014, 2016 -2017</em></p>
																		<p><em>Parish Council President &ndash; Assumption Greek Orthodox Cathedral &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2010</em></p>
																		<p><em>Parish Council &ndash; Assumption Greek Orthodox Cathedral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2009 &ndash; 2011</em></p>

				</ModalBody>
				<ModalFooter className="bg-dark">
					<Button color="primary" onClick={toggle}>Thank You</Button>{' '}

				</ModalFooter>
			</Modal>
		</div>
	);
}

export default Resume;