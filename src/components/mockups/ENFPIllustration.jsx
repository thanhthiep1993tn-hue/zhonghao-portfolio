function ENFPIllustration() {
  return (
    <svg className="enfp-illustration" viewBox="0 0 520 360" role="img" aria-label="从想法到行动的原创插图">
      <defs>
        <linearGradient id="enfp-bg" x1="0" x2="1">
          <stop offset="0" stopColor="#eaf2ff" />
          <stop offset="1" stopColor="#fff0f7" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" rx="34" fill="url(#enfp-bg)" />
      <circle cx="430" cy="72" r="34" fill="#facc15" />
      <g fill="none" stroke="#14171f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="195" cy="140" r="48" fill="#fff" />
        <path d="M150 270c5-62 34-92 80-92s77 31 82 92" fill="#2563eb" />
        <path d="M177 137c9 8 28 8 37 0" />
        <path d="M173 116h1M217 116h1" />
        <path d="M305 160c56-2 98 17 122 60" stroke="#22c55e" />
        <path d="m412 205 16 16-20 8" stroke="#22c55e" />
      </g>
      <g>
        <rect x="40" y="45" width="135" height="66" rx="22" fill="#fff" stroke="#2563eb" strokeWidth="4" />
        <text x="107" y="84" textAnchor="middle" fontSize="24" fontWeight="700" fill="#2563eb">IDEA</text>
        <rect x="340" y="230" width="135" height="66" rx="22" fill="#fff" stroke="#f97316" strokeWidth="4" />
        <text x="407" y="270" textAnchor="middle" fontSize="22" fontWeight="700" fill="#f97316">ACTION</text>
      </g>
      <g fill="#8b5cf6">
        <path d="M275 55l7 16 17 2-13 11 4 17-15-9-15 9 4-17-13-11 17-2z" />
        <circle cx="75" cy="240" r="12" />
        <circle cx="105" cy="270" r="7" />
      </g>
    </svg>
  )
}

export default ENFPIllustration
