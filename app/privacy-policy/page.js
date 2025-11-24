import React from "react";
import Link from "next/link";
import {
  MdCheckCircle,
  MdLocationOn,
  MdSecurity,
  MdLock,
  MdPhoneIphone,
} from "react-icons/md";

export const metadata = {
  title: "Privacy Policy | Aviora Portal - Nursing Care Management System",
  description:
    "Privacy Policy for Aviora Portal - Learn how we collect, use, and protect your data in our nursing care management system including location tracking and mobile app usage.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1d1e37]">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#1d1e37]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 font-bold text-xl"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-4xl">
        <div className="bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-8 md:p-12">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-display">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Aviora Portal ("we," "our," or "us") operates a bespoke nursing
              care management system that provides comprehensive solutions for
              managing clients, employees, appointments, care plans, attendance
              tracking, and related healthcare operations. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our services, including our website,
              management portal, and mobile applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. We are committed to
              protecting your privacy and ensuring the security of your personal
              and sensitive information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              2. Information We Collect
            </h2>

            <div className="mb-6">
              <h3 className="text-xl text-white font-bold mb-3">
                2.1 Client Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                When managing clients through our system, we collect and store:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Personal identification information (name, date of birth,
                    contact details)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Medical histories, health records, and care preferences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Care plans, treatment plans, and intervention records
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Appointment records and service delivery information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Form submissions and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Emergency contact information</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-white font-bold mb-3">
                2.2 Employee Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                For employees using our system, we collect:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Personal identification information (name, employee ID,
                    contact details)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Employment records, qualifications, and certifications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Login credentials and authentication data</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Work schedules and assignment records</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl text-white font-bold mb-3 flex items-center gap-2">
                <MdLocationOn className="text-primary" />
                2.3 Location Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Our system collects location data for operational and
                verification purposes:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Clock In/Out Location:</strong> When employees clock
                    in or out using our system (web portal or mobile app), we
                    automatically capture GPS coordinates (latitude and
                    longitude) and the physical address of the location
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Appointment Completion Location:</strong> When
                    employees complete appointments through the mobile app, we
                    capture the GPS location where the appointment was completed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Location data is stored securely and is accessible to
                    authorized administrators for verification, attendance
                    tracking, and service delivery confirmation
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Location tracking is essential for
                verifying attendance, ensuring service delivery at correct
                locations, and maintaining accurate records. You can disable
                location services on your mobile device, but this may limit
                functionality of clock in/out and appointment completion
                features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-white font-bold mb-3">
                2.4 Mobile Application Data
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                When using our employee mobile application (iOS and Android), we
                collect:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Device information (device type, operating system, app
                    version)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Location data when clocking in/out or completing
                    appointments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>App usage data and interaction logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Authentication tokens and session information</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-white font-bold mb-3">
                2.5 System Usage Data
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We automatically collect information about how you use our
                system:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Login times and session duration</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Features accessed and actions performed</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Form submissions and data entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>IP addresses and browser information</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Service Delivery:</strong> To provide and maintain our
                  nursing care management services, including client management,
                  employee scheduling, appointment tracking, and care plan
                  management
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Attendance Tracking:</strong> To record and verify
                  employee attendance, track work hours, and generate attendance
                  reports using location data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Appointment Management:</strong> To schedule, track,
                  and verify appointment completions, including location
                  verification
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Form Processing:</strong> To process and store form
                  submissions, maintain documentation, and ensure compliance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>User Assignment:</strong> To assign clients to
                  employees based on skills, availability, and care requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>System Administration:</strong> To manage user
                  accounts, control access, and maintain system security
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Reporting and Analytics:</strong> To generate reports,
                  analyze usage patterns, and improve our services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Communication:</strong> To send notifications,
                  reminders, and important updates related to your account and
                  services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Compliance:</strong> To comply with legal obligations,
                  respond to legal requests, and protect our rights and the
                  rights of our users
                </span>
              </li>
            </ul>
          </section>

          {/* Location Tracking Details */}
          <section className="mb-10 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 flex items-center gap-2">
              <MdLocationOn className="text-primary" />
              4. Location Tracking - Detailed Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our system uses location tracking for specific operational
              purposes. Here's how it works:
            </p>

            <div className="mb-4">
              <h3 className="text-xl text-white font-bold mb-3">
                4.1 Clock In/Out Location Tracking
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                When employees clock in or out (via web portal or mobile app):
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    GPS coordinates (latitude and longitude) are automatically
                    captured
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    The physical address is determined from GPS coordinates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    This location data is stored with the attendance record
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Authorized administrators can view clock in/out locations in
                    the attendance matrix
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl text-white font-bold mb-3">
                4.2 Appointment Completion Location
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                When employees complete appointments through the mobile app:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    GPS location is captured at the time of appointment
                    completion
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Location data is associated with the completed appointment
                    record
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Administrators can view where each appointment was completed
                    for verification purposes
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl text-white font-bold mb-3">
                4.3 Location Data Access and Control
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Location data is:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Only accessible to authorized administrators within your
                    organization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Used solely for operational purposes (attendance
                    verification, service delivery confirmation)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>Stored securely with encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Not shared with third parties except as required by law
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Mobile App Specifics */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 flex items-center gap-2">
              <MdPhoneIphone className="text-primary" />
              5. Employee Mobile Application
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our mobile application for employees (iOS and Android) has limited
              functionality and collects specific data:
            </p>

            <div className="bg-[#E4E4E4]/5 border border-gray-300 rounded-lg p-6 mb-4">
              <h3 className="text-xl text-white font-bold mb-3">
                5.1 Mobile App Features and Data Collection
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Shift Logging:</strong> Employees can log their
                    shifts through the app. When logging a shift, the app
                    automatically captures and stores the GPS location
                    (coordinates and address) where the shift is being logged.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Appointment Viewing:</strong> Employees can view
                    their assigned appointments through the app. This feature
                    requires access to appointment data but does not collect
                    additional location data unless an appointment is completed.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Appointment Completion:</strong> When employees
                    complete an appointment through the app, the system captures
                    the GPS location where the completion occurred. This
                    location data is stored with the appointment record and is
                    visible to administrators.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl text-white font-bold mb-3">
                5.2 Mobile App Permissions
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                The mobile app requires the following permissions:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Location Services:</strong> Required for capturing
                    location when logging shifts and completing appointments.
                    You can disable this in your device settings, but shift
                    logging and appointment completion features will not
                    function properly.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Internet Access:</strong> Required for syncing data
                    with the central system
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-10 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 flex items-center gap-2">
              <MdSecurity className="text-primary" />
              6. Data Storage and Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your
              information:
            </p>
            <ul className="space-y-3 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Encryption:</strong> All data is encrypted in transit
                  (using SSL/TLS) and at rest (using AES encryption)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Secure Servers:</strong> Data is stored on secure,
                  cloud-based servers with regular security audits
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Access Controls:</strong> Role-based access control
                  ensures only authorized personnel can access sensitive data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Regular Backups:</strong> Daily automated backups
                  ensure data recovery in case of system issues
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Authentication:</strong> Strong password requirements
                  and secure login procedures protect user accounts
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Audit Logs:</strong> All system access and data
                  modifications are logged for security monitoring
                </span>
              </li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              7. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may
              share information only in the following circumstances:
            </p>
            <ul className="space-y-3 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Within Your Organization:</strong> Authorized
                  administrators and staff within your organization can access
                  data as permitted by their role-based access levels
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Service Providers:</strong> We may share data with
                  trusted third-party service providers who assist in operating
                  our system (e.g., cloud hosting, email services), subject to
                  strict confidentiality agreements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required by law, court order, or government
                  regulation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, data may be transferred as
                  part of the transaction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>With Consent:</strong> We may share information with
                  your explicit consent for specific purposes
                </span>
              </li>
            </ul>
          </section>

          {/* User Rights */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              8. Your Rights and Choices
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Access:</strong> You can request access to your
                  personal information stored in our system
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Correction:</strong> You can request correction of
                  inaccurate or incomplete information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Deletion:</strong> You can request deletion of your
                  information, subject to legal and operational requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Location Controls:</strong> You can disable location
                  services on your mobile device, though this may limit app
                  functionality
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Account Management:</strong> You can update your
                  account information and preferences through the system portal
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Data Portability:</strong> You can request a copy of
                  your data in a portable format
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              9. Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Provide our services and fulfill contractual obligations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Comply with legal, regulatory, and compliance requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Resolve disputes and enforce agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Maintain accurate records for healthcare and employment
                  purposes
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              When data is no longer needed, we securely delete or anonymize it
              in accordance with our data retention policies and applicable
              laws.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              10. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Maintain user sessions and authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Remember user preferences and settings</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Analyze system usage and improve functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Ensure system security and prevent fraud</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can control cookies through your browser settings, though
              disabling cookies may affect system functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              11. Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our system may integrate with or link to third-party services. We
              are not responsible for the privacy practices of these third
              parties. We encourage you to review their privacy policies.
              Third-party services we may use include:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Cloud hosting and storage providers</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Email and communication services</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Analytics and monitoring tools</span>
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              12. Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are designed for healthcare organizations and are not
              intended for use by children under the age of 18. We do not
              knowingly collect personal information from children. If you
              believe we have inadvertently collected information from a child,
              please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. We will notify you of any material changes by:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Posting the updated policy on our website with a new "Last
                  Updated" date
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Sending notifications through the system portal</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Email notifications for significant changes</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Your continued use of our services after changes become effective
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 flex items-center gap-2">
              <MdLock className="text-primary" />
              14. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-gray-300 space-y-2">
              <p>
                <strong>Email:</strong> info@avioraportal.com
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/message/3V4KLRGQ6IBEP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Contact via WhatsApp
                </a>
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              We will respond to your inquiries within a reasonable timeframe
              and in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-gray-400 text-sm text-center">
              This Privacy Policy is effective as of the date listed above and
              applies to all users of Aviora Portal services.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
