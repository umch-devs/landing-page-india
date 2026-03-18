import Image from "next/image"
import aracis from "../public/images/footer/certificates/footer_aracis.svg"
import direct from "../public/images/footer/certificates/footer_direct.svg"
import iaar from "../public/images/footer/certificates/footer_iaar.svg"
import qm from "../public/images/footer/certificates/footer_qm_th.svg"
import silver from "../public/images/footer/certificates/footer_silver_medal.svg"
import tuevAustria from "../public/images/footer/certificates/footer_tuev_austria.svg"
import wfme from "../public/images/footer/certificates/footer_wfme.svg"

const certificates = [
  {
    name: aracis,
    description:
      "Accredited by Romanian Agency for Quality Assurance in Higher Education",
  },
  {
    name: iaar,
    description:
      "Accredited by the independent association of accredited Registrars",
  },
  {
    name: wfme,
    description: "Recognized by the World Federation for Medical Education",
  },
  {
    name: tuevAustria,
    description: "EN ISO 9001:2015 certified",
  },
  {
    name: direct,
    description: "Listed in the World Directory of Medical Schools",
  },
  {
    name: qm,
    description: "Quality Management in clinical teaching",
  },
  {
    name: silver,
    description:
      "Silver Medal Winner 2025 in the field of Health Communication",
  },
]

const Certificates = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white px-6 pt-14 pb-10">
      <div className="align-center flex w-full flex-wrap justify-center gap-5 gap-y-10">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5"
            style={{ flex: "0 0 14%", maxWidth: 180 }}
          >
            <Image src={certificate.name} alt={certificate.description} />
            <p className="text-center">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
