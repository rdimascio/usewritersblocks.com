/**
 * Internal dependencies
 */
 import Footer from '@/components/Footer';

export default function Privacy() {
    return (
      <>
      <div className="relative py-16 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl sm:tracking-tight">
                Privacy
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
            At Writer's Blocks, accessible from https://usewritersblocks.com, privacy of our visitors is an absolute priority. We only ask for personal information when we actually need it—like our payment form. We use fair and lawful means to collect any data, and only with your knowledge and consent.
            </p>
          </div>
          <div className="mt-16 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2 className="dark:text-white text-gray-900">Introduction</h2>
            <p>If you have additional questions, or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            <p>The only third parties that we share data with are secure and we only share what’s required:</p>

            <ol>
                <li>
                Stripe and PayPal, for secure payment processing. We do not, and will never, store any payment card details.
                </li>
            </ol>

            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law  or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

            <h2 className="dark:text-white text-gray-900">Personal & Usage Data</h2>
            <p>While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>

            <ul>
                <li>Email address</li>
                <li>Non-personally identificable personal data for usage</li>
            </ul>

            <p>We do not collect information such as your computer’s Internet Protocol address (e.g. IP address), browser version, unique device identifiers and other diagnostic data.</p>

            <h2 className="dark:text-white text-gray-900">Service Providers</h2>
            <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h2 className="dark:text-white text-gray-900">Links to Other Sites</h2>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.  We advise you to review the Privacy Policy of every site you visit.</p>

            <h2 className="dark:text-white text-gray-900">Retention of Data</h2>
            <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
            <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>

            <h2 className="dark:text-white text-gray-900">Transfer of Data</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
            <p>If you are located outside North America and choose to provide information to us, please note that we transfer the data, including Personal Data, to North America and process it there.</p>
            <p>We will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

            <h2 className="dark:text-white text-gray-900">Children’s Privacy</h2>
            <p>Our Service does not address anyone under the age of 18 (“Children”). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us.</p>
            <p>If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

            <h2 className="dark:text-white text-gray-900">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our website, prior to the change becoming effective and update the “effective date” at the top of this policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <p>Last updated: August 16, 2022</p>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }