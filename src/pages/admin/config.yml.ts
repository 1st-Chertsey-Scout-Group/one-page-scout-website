export async function GET() {
  let result =
    `
  local_backend: true
  backend:
    name: github
    repo: 1st-Chertsey-Scout-Group/one-page-scout-website
  media_folder: "public/media"
  public_folder: "public"
  publish_mode: simple
  collections:
    - name: "sections"
      label: "Sections"
      label_singular: "Section"
      folder: "src/content/sections"
      identifier_field: "name"
      extension: "json"
      publish: false
      create: true
      nested:
          depth: 2
          summary: '{{title}}'
      media_folder: ''
      public_folder: ''
      fields:
        - label: "Name"
          name: "name"
          widget: "string"

        - label: "Type"
          name: "type"
          widget: "select"
          options:
            - label: "Squirrels"
              value: "squirrels"
            - label: "Beavers"
              value: "beavers"
            - label: "Cubs"
              value: "cubs"
            - label: "Scouts"
              value: "scouts"

        - label: "Order"
          name: "order"
          widget: "number"

        - label: "Age"
          name: "age"
          widget: "string"

        - label: "Meeting Day"
          name: "meetingDay"
          widget: "select"
          options:
            - label: "Monday"
              value: "Monday"
            - label: "Tuesday"
              value: "Tuesday"
            - label: "Wednesday"
              value: "Wednesday"
            - label: "Thursday"
              value: "Thursday"
            - label: "Friday"
              value: "Friday"

        - label: "Meeting Start Time"
          name: "meetingStartTime"
          widget: "string"

        - label: "Meeting End Time"
          name: "meetingEndTime"
          widget: "string"

        - label: "Image"
          name: "image"
          widget: "image"
          media_folder: "."


    - name: "content"
      label: "Content"
      files:
        - label: "Customisations"
          name: "customisations"
          file: "src/customisations.json"
          fields:
            - label: "Site Title"
              name: "siteTitle"
              widget: "string"

            - label: "Site Url"
              name: "siteUrl"
              widget: "string"

            - label: "Site Description"
              name: "siteDescription"
              widget: "text"

            - label: "Group Name"
              name: "groupName"
              widget: "string"

            - label: "Logo"
              name: "logo"
              widget: "image"
              media_folder: "/src/images"

            - label: "Header Alt Text"
              name: "headerAltText"
              widget: "string"

            - label: "Hero Title"
              name: "heroTitle"
              widget: "string"

            - label: "Hero Sentence One"
              name: "heroSentenceOne"
              widget: "text"

            - label: "Hero Sentence Two"
              name: "heroSentenceTwo"
              widget: "text"

            - label: "Hero Get In Touch"
              name: "heroGetInTouch"
              widget: "string"

            - label: "Hero Image"
              name: "heroImage"
              widget: "image"
              media_folder: "/src/images"

            - label: "Hero Alt Text"
              name: "heroAltText"
              widget: "string"

            - label: "Sections Title"
              name: "sectionsTitle"
              widget: "string"

            - label: "Sections Subtitle"
              name: "sectionsSubtitle"
              widget: "text"

            - label: "Join CTA Title"
              name: "joinCtaTitle"
              widget: "string"

            - label: "Join CTA Subtitle"
              name: "joinCtaSubtitle"
              widget: "text"

            - label: "Join CTA Button"
              name: "joinCtaButton"
              widget: "string"

            - label: "Address Title"
              name: "addressTitle"
              widget: "string"

            - label: "Address"
              name: "address"
              widget: "string"

            - label: "Address Url"
              name: "addressUrl"
              widget: "string"

            - label: "Contact Title"
              name: "contactTitle"
              widget: "string"

            - label: "Contact Subtitle"
              name: "contactSubtitle"
              widget: "text"

            - label: "Contact Email Label"
              name: "contactEmailLabel"
              widget: "string"

            - label: "Contact Email Placeholder"
              name: "contactEmailPlaceholder"
              widget: "string"

            - label: "Contact Subject Label"
              name: "contactSubjectLabel"
              widget: "string"

            - label: "Contact Subject Placeholder"
              name: "contactSubjectPlaceholder"
              widget: "string"

            - label: "Contact Message Label"
              name: "contactMessageLabel"
              widget: "string"

            - label: "Contact Message Placeholder"
              name: "contactMessagePlaceholder"
              widget: "string"

            - label: "Contact Submit Button"
              name: "contactSubmitButton"
              widget: "string"

            - label: "Footer Subtitle"
              name: "footerSubtitle"
              widget: "string"

            - label: "Charity Number"
              name: "charityNumber"
              widget: "string"

  `;

  return new Response(result, {
    headers: {
      'Content-Type': 'text/yaml',
    },
  });
}