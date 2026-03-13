import CallToActionLink from "../shared/CallToActionLink"

const rows = [
  {
    category: "",
    india: "\uD83C\uDDEE\uD83C\uDDF3 MBBS in India",
    germany: "\uD83C\uDDE9\uD83C\uDDEA MBBS at UMFST-UMCH Germany",
  },
  {
    category: "Entrance Exam",
    india: "NEET required (extremely competitive)",
    germany: "Easy NEET \u2014 no competition for seats",
  },
  {
    category: "Language",
    india: "Regional languages or English",
    germany: "100% English-taught programme",
  },
  {
    category: "Admission Requirements",
    india: "Minimum marks, reservation system",
    germany: "High school diploma (CBSE/CISCE) \u2014 no minimum grades",
  },
  {
    category: "Degree Recognition",
    india: "Recognised in India",
    germany: "EU-wide + UK, USA (USMLE), Canada, UAE, India (FMGE)",
  },
  {
    category: "German Language",
    india: "Not included",
    germany: "Free German course included (B2 in 2 years)",
  },
]

export function Comparison() {
  return (
    <section id="comparison" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Compare Your Options
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Studying MBBS in India vs at UMFST-UMCH Germany
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See how studying medicine at UMFST-UMCH Hamburg compares to the
            traditional MBBS pathway in India.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border bg-white shadow-sm md:block">
          <table className="w-full text-left">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.category}
                  className={
                    i === 0
                      ? "bg-primary"
                      : i % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                  }
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    {row.category}
                  </td>
                  <td
                    className={`px-6 py-4 ${i === 0 ? "text-white" : "text-muted-foreground"}`}
                  >
                    {row.india}
                  </td>
                  <td
                    className={`px-6 py-4 font-medium ${i === 0 ? "text-white" : "text-emerald-700"}`}
                  >
                    {i !== 0 && "\u2713"} {row.germany}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-14 space-y-4 md:hidden">
          {rows.map((row) => (
            <div
              key={row.category}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-primary">{row.category}</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-sm">
                    {"\uD83C\uDDEE\uD83C\uDDF3"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {row.india}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-sm">
                    {"\uD83C\uDDE9\uD83C\uDDEA"}
                  </span>
                  <span className="text-sm font-medium text-emerald-700">
                    {"\u2713"} {row.germany}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CallToActionLink titel="Start Your Application" />
        </div>
      </div>
    </section>
  )
}
