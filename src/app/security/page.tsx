import { Container } from "@/components/ui/container";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Security</h1>
        <p className="text-body mt-6 max-w-2xl">
          MillFlow AI is designed with practical security controls for mill operations — protecting access to stock,
          billing, and sensitive operational records.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Access control</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Role-based permissions for teams</li>
              <li>Separate access for owners, accounts, and operators</li>
              <li>Secure authentication and session controls</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Data protection</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Encrypted data storage and backups</li>
              <li>Operational monitoring to detect anomalies</li>
              <li>Audit-friendly exports and change history</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

