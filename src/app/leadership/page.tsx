export const metadata = {
  title: "Leadership | Abhilash George",
  description: "Leadership profile and achievements of Abhilash George.",
};

export default function LeadershipPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-10 text-gray-900 border-b-2 border-primary pb-4">
          Leadership Profile
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">College Leadership Roles</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li><strong>Vice-Chairperson</strong>, ISTE MBCET (2022–2023)</li>
            <li><strong>President</strong>, Creative Club of Christ Nagar (2019–2020)</li>
            <li><strong>Start-Up Lead</strong>, IIC (2023–2025)</li>
            <li><strong>Joint Secretary</strong>, IET MBCET (2023–2025)</li>
            <li><strong>Treasurer</strong>, CSI MBCET (2022–2024)</li>
            <li><strong>Technical Officer</strong>, IEDC (2022–2023)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Achievements</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li><strong>Young Innovators Programme</strong> — State level winner (₹75,000 grant)</li>
            <li><strong>Dekathon 2.0</strong> — Runner-up (₹25,000 + FABLAB Kochi internship)</li>
            <li><strong>Present Around the World (IET)</strong> — Runner-up (₹10,000)</li>
            <li><strong>Best Start-up Award</strong> — Space Ventura</li>
            <li><strong>Ideathon Winner + Tech Expo Runner-up</strong> — PRAYAAG 3.0</li>
            <li>Mentored team to national top 1000 — <strong>Youth Ideathon</strong></li>
            <li><strong>Infinitum (NIT Calicut)</strong> — State finals runner-up among 12,000 teams</li>
            <li>Robotics talk at CUSAT (2018 — while in school)</li>
            <li>Exhibited at Keraleeyam 2023</li>
            <li>Greenfield Stadium — waste management during international cricket match</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
