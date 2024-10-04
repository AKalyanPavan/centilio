import Header from './Header.js';
import Button from './Button.js';
import Footer from './Footer.js';

import centFeat from './../images/features/cent-feat.png';
import documentManagement from './../images/features/document-management.png';
import remoteCoordination from './../images/features/remote-coordination.png';
import documentSigning from './../images/features/document-signing.png';
import customization from './../images/features/customization.png';
import compilanceSafety from './../images/features/compliance-safety.png';

function Features() {
	return (
		<>
			<Header />
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto">
				<div className="mt-[150px] flex  xl:flex-row flex-col xl:gap-[200px] gap-[50px]">
					<div className="md:text-[56px] text-[40px] leading-[60px] font-bold xl:min-w-[583px]">
						Make Your Paperless Journey Easier.
					</div>
					<div>
						<div className="text-[18px] leading-[32px]">
							Centilio is a trusted electronic signature solution to keep your company operating smoothly. Document creation, contract management, payment processing, and the development of automated workflows are all within your reach.
						</div>
						<Button title={"SIGN UP YOUR FREE TRAIL"} style={"px-[40px]"} />
					</div>
				</div>
				<img className="my-[120px]" src={centFeat} />
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto flex xl:flex-row flex-col gap-[50px] items-center">
				{/*<div className="max-w-[1380px] xl:ml-auto max-xl:mx-auto">*/}
					<div>
						<div className="font-bold text-[40px]">Document Management</div>
						<div className="text-[20px] pt-[15px]">Quickly Reduce Mountainous Piles of Paper</div>
						<div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-[50px]">
							<div>
								<div className="font-semibold text-[20px]">Easy Import</div>
								<div className="mt-[15px]">
									Whether you're using a desktop application or a cloud storage service like Google Drive, OneDrive, or DropBox, you can easily upload your company's documents to Centilio.
								</div>
							</div>
							<div>
								<div className="font-semibold text-[20px]">Multiple Options</div>
								<div className="mt-[15px]">
									Legal papers, proposals, quotes, and contracts can be digitally signed with our electronic software.
								</div>
							</div>
							<div>
								<div className="font-semibold text-[20px]">Supports Multiple Formats</div>
								<div className="mt-[15px]">
									Use more file types including PDF, JPG, PNG, DOCX, and others, to import and sign documents.
								</div>
							</div>
							<div>
								<div className="font-semibold text-[20px]">Auto Field Inputs</div>
								<div className="mt-[15px]">
									Documents can be pre-filled with text tags so that when you submit them to begin the signing process, the appropriate fields will already exist.
								</div>
							</div>
						</div>
					</div>
					<div className="p-[40px] bg-[#f5f5f5] max-xl:min-w-[540px] max-md:min-w-[100%] xl:w-[130%] rounded-[32px]">
						<img src={documentManagement} />
					</div>
				{/*</div>*/}
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto flex xl:flex-row flex-col-reverse xl:gap-[80px] gap-[40px] mt-[200px] items-center">
				<div className="p-[40px] bg-[#f5f5f5] max-sm:min-w-[100%] rounded-[32px] xl:w-[130%] max-xl:w-[100%]">
					<img src={remoteCoordination} />
				</div>
				<div>
					<div className="font-bold text-[40px]">Remote Coordination</div>
					<div className="text-[20px] pt-[15px]">Out of Office Doesn't Mean Disconnected.</div>
					<div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-[50px]">
						<div>
							<div className="font-semibold text-[20px]">Instantaneous Suggestions</div>
							<div className="mt-[15px]">
								You can add a public or private remark to a document to provide more context or more information without having to repeatedly send and receive the same file.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Intime Prompts</div>
							<div className="mt-[15px]">
								In order to speed up the signing procedure, you can check on the current standing of the documents and send out reminders.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Easy recall</div>
							<div className="mt-[15px]">
								If the document with a typo or was sent to the wrong recipient, just revoke the document and stop the signing process.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Command and Conquer</div>
							<div className="mt-[15px]">
								Documents may be accepted, rejected, or declined as you see fit. Centilio facilitates flexible response.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto flex xl:flex-row flex-col gap-[50px] items-center mt-[200px]">
				<div>
					<div className="font-bold text-[40px]">Document Signing</div>
					<div className="text-[20px] pt-[15px]">Sign Using Any Browser or Device.</div>
					<div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-[50px]">
						<div>
							<div className="font-semibold text-[20px]">Several Signature Choices</div>
							<div className="mt-[15px]">
								Signatures can be drawn, typed, or uploaded into documents. Once you've settled on a signature, you may save it for future usage with a single click.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Effortless Procedure</div>
							<div className="mt-[15px]">
								In a matter of seconds, you and anybody else listed can legally sign documents in the sequence you specify with only a few clicks each. The signed copies will be sent to your email.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Mobile Signing</div>
							<div className="mt-[15px]">
								Sign documents on the move or send them out to be signed by downloading our apps for Android or iOS.
							</div>
						</div>
					</div>
				</div>
				<div className="p-[40px] bg-[#f5f5f5] max-xl:min-w-[700px] max-md:min-w-[100%] xl:w-[130%] rounded-[32px]">
					<img src={documentSigning} />
				</div>
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto flex xl:flex-row flex-col-reverse xl:gap-[80px] gap-[40px] mt-[200px] max-xl:items-center">
				<div className="p-[40px] bg-[#f5f5f5] max-sm:min-w-[100%] rounded-[32px] xl:w-[130%] max-xl:w-[100%]">
					<img src={customization} />
				</div>
				<div>
					<div className="font-bold text-[40px]">Customization</div>
					<div className="text-[20px] pt-[15px]">Collect Contracts on Your Own Way</div>
					<div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-[50px]">
						<div>
							<div className="font-semibold text-[20px]">Templates</div>
							<div className="mt-[15px]">
								To save time and effort, you can permanently reuse documents that you use regularly by making them into templates.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Branding</div>
							<div className="mt-[15px]">
								Completely modify your document to reflect your brand's style and tone, from the logos, colors, and text.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Bulk Signing</div>
							<div className="mt-[15px]">
								In one easy step, you may use a variety of document processing templates to send a stack of papers for signature.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Dialectal Signing</div>
							<div className="mt-[15px]">
								Permit signers to finish the signing procedure in their native language.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Integrations</div>
							<div className="mt-[15px]">
								You can use our APIs and pre-built interfaces to digitally sign documents in your regular applications.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto flex xl:flex-row flex-col gap-[50px] items-center mt-[200px]">
				<div>
					<div className="font-bold text-[40px]">Compliance and Safety</div>
					<div className="text-[20px] pt-[15px]">Authenticate Signers with High Level of Confidence.</div>
					<div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-[50px]">
						<div>
							<div className="font-semibold text-[20px]">Higher-Level Authentication</div>
							<div className="mt-[15px]">
								Implementing a multi-factor authentication system is a great way to further secure your account and data.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Verification procedures</div>
							<div className="mt-[15px]">
								Learn exactly what is happening at each stage of the document signing procedure, from seeing to sending to signing, and beyond. Our services also include time stamping based on a distributed ledger system.
							</div>
						</div>
						<div>
							<div className="font-semibold text-[20px]">Maximum Data Confidentiality</div>
							<div className="mt-[15px]">
								With Centilio, your data is protected with multiple layers of encryption. It complies with the newest regulations governing electronic signatures.
							</div>
						</div>
					</div>
				</div>
				<div className="p-[40px] bg-[#f5f5f5] max-xl:min-w-[700px] max-md:min-w-[100%] xl:w-[140%] rounded-[32px]">
					<img src={compilanceSafety} />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Features;