# One Page Scout Website

**One Page Scout Website** is a simple, customizable one-page website template for UK scout groups. Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/), it provides a lightweight and modern solution for displaying essential scouting information.

## Features

- Lightweight, single-page design
- Fully customizable
- Easy deployment with Netlify
- Admin interface for content management using Decap CMS
- Supports VS Code Dev Containers for streamlined development

## Getting Started

### Forking and Customizing the Repository

1. **Fork the Repository**  
   Click the "Fork" button on the top-right corner of the repository page to create a personal copy of this repository. During the forking process, rename the repository to suit your project.

2. **Update Repository References**  
   After forking, update all references to `one-page-scout-website` and `1st-Chertsey-Scout-Group` in the project files to match the new repository name:

   - Find and replace `one-page-scout-website` in the entire project.
   - Key files to update:

     - `package.json`
     - `package-lock.json`
     - `README.md`
     - `/src/layouts/base.layout.astro`
     - `/src/pages/admin/config.yml.ts`

   - Find and replace `1st-Chertsey-Scout-Group` in the entire project.
   - Key files to update:
     - `README.md`
     - `/src/layouts/base.layout.astro`
     - `/src/pages/admin/config.yml.ts`

### Hosting on Netlify

#### 1. Deploy the Site

Click the button below to deploy your site to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/1st-Chertsey-Scout-Group/one-page-scout-website)

#### 2. Configure Decap CMS for Admin Interface

To enable the admin interface under `/admin/`, follow these steps:

##### OAuth Provider Setup

1. **Create a GitHub OAuth Application**
   - Go to your GitHub **Settings > Developer Settings > OAuth Apps** (or use [this link](https://github.com/settings/developers)).
   - Click **Register a new application**.
   - Fill in the fields:
     - **Authorization callback URL**: `https://api.netlify.com/auth/done`
     - Other fields can contain any value.
   - Save the application.
   - Copy the **Client ID** and **generate a Client Secret**. Save these values for later.

##### Netlify UI Settings

1. Log in to Netlify and go to your site's **Site configuration > Access & security > OAuth**.
2. Under **Authentication Providers**, click **Install Provider**.
3. Select **GitHub** and paste in the Client ID and Client Secret from the previous step.
4. Save your changes.

### Setting Up Azure Communication Email Services

This project supports sending emails using **Azure Communication Services**. Follow the steps below to set up your email service and configure it for the project.

#### 1. Create an Azure Communication Services Resource

1. Sign in to the [Azure Portal](https://portal.azure.com/).
2. Create a new **Communication Services** resource:
   - Search for "Communication Services" in the search bar.
   - Select **Create**, and provide the required details (e.g., subscription, resource group, region).
   - Click **Review + Create** and then **Create**.
3. Once created, go to your Communication Services resource.

#### 2. Enable Email Service

1. Under your Communication Services resource, select **Email** from the left-hand menu.
2. Follow the instructions to enable email capabilities for your service.
3. Set up a **verified sender domain** if needed.

#### 3. Generate a Connection String

1. In your Communication Services resource, go to **Keys and Connection String**.
2. Copy the **Connection String** for use in your environment variables.

#### 4. Configure Environment Variables on Netlify

Go to your Netlify dashboard and set the following environment variables for your site:

| Variable Name             | Description                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `EMAIL_CONNECTION_STRING` | The connection string from Azure Communication Services.                                                            |
| `EMAIL_RECIPIENTS`        | A comma-separated list of email addresses to receive notifications (e.g., `"example1@test.com,example2@test.com"`). |
| `EMAIL_SENDER`            | The email address that will appear as the sender of emails (must match a verified domain in Azure).                 |

#### 5. Add Environment Variables in Netlify

1. In the Netlify dashboard, go to **Site Settings > Environment Variables**.
2. Add the variables listed above, along with their respective values.
3. Save the changes and redeploy your site to apply the configuration.

Once configured, your application will be able to send emails using Azure Communication Email Services.

## Updating

To keep your forked repository up to date with the latest changes from the original **one-page-scout-website** repository:

1. Go to your forked repository on GitHub.
2. Click the **Sync fork** button, typically found near the top-right corner of the repository page.
3. Confirm the action if prompted.

This will pull the latest updates from the original repository into your fork, ensuring you have access to new features, bug fixes, and improvements.

If you have made local customizations, make sure to review and resolve any potential merge conflicts before syncing your changes.

## Customisations

Configuration is handled through JSON files located in the `/src/customisations` and `src/content` directory. Below is an overview of the sections you can configure and their respective fields. If you prefer a GUI, an admin interface is availble under `https://{URL}/admin/`.

To customise the images, please update the placeholders in the located in the `src/images` directory.

### Customizable Sections

#### Sections
- **File**: `src/customisations/sections.json`
- **Fields**:
  - **Title**: Main title for the sections page.
  - **Subtitle**: Subtitle displayed on the sections page.

![Example sections section](/docs/images/example-sections.png)

#### Address
- **File**: `src/customisations/address.json`
- **Fields**:
  - **Title**: Title for the address section.
  - **Address**: Full address of the scout group.
  - **Map URL**: Google Maps embed link.
  - **Map Title**: Alt text for the map (used for accessibility).
  
![Example address section](/docs/images/example-address.png)

#### Announcement
- **File**: `src/customisations/announcement.json`
- **Fields**:
  - **Message**: Announcement text.
  - **URL**: Link associated with the announcement.
  - **Expiry**: Expiry date for the announcement.

#### Contact Form
- **File**: `src/customisations/contact-form.json`
- **Fields**:
  - **Title**: Title of the contact form.
  - **Subtitle**: Subtitle for the contact form.
  - **Email Label**: Label text for the email field.
  - **Email Placeholder**: Placeholder text for the email field.
  - **Name Label**: Label text for the name field.
  - **Name Placeholder**: Placeholder text for the name field.
  - **Message Label**: Label text for the message field.
  - **Message Placeholder**: Placeholder text for the message field.
  - **Button**: Label for the submit button.
  - **Privacy Notice**: Privacy notice displayed under the form.


![Example contact form section](/docs/images/example-contact-form.png)

#### Footer
- **File**: `src/customisations/footer.json`
- **Fields**:
  - **Links**: List of footer links with labels, URLs, and targets.
  - **Copyright**: Copyright text displayed at the bottom of the page.


![Example contact form section](/docs/images/example-footer.png)

#### Hero Section
- **File**: `src/customisations/hero.json`
- **Fields**:
  - **Title**: Title displayed in the hero section.
  - **Line One**: First line of the hero text.
  - **Line Two**: Second line of the hero text.
  - **Button**: Text for the call-to-action button.
  - **Image Alt Text**: Alt text for the hero image.


![Example hero section](/docs/images/example-hero.png)

#### Join CTA (Call-to-Action)
- **File**: `src/customisations/join-cta.json`
- **Fields**:
  - **Title**: Title for the CTA.
  - **Subtitle**: Subtitle for the CTA.
  - **Button**: Text for the button.

![Example Join CTA section](/docs/images/example-join-cta.png)

#### SEO Settings
- **File**: `src/customisations/seo.json`
- **Fields**:
  - **Title**: Title for search engine optimization.
  - **Description**: Meta description for the website.

#### Site Settings
- **File**: `src/customisations/site.json`
- **Fields**:
  - **URL**: Full URL of the website.
  - **Group Name**: Name of the scout group.
  - **Primary**: Primary color (e.g., scarf color).
  - **Primary Foreground**: Text color that contrasts with the primary color.
  - **Logo Alt Text**: Alt text for the group logo.
  - **Footer Text**: Text displayed in the footer.
  - **Charity Number**: Registered charity number.

#### Success Page
- **File**: `src/customisations/success.json`
- **Fields**:
  - **Title**: Title for the success page.
  - **Subtitle**: Subtitle for the success page.
  - **Button**: Text for the button on the success page.

#### Error Page
- **File**: `src/customisations/error.json`
- **Fields**:
  - **Title**: Title for the error page.
  - **Subtitle**: Subtitle for the error page.
  - **Button**: Text for the button on the error page.

### Validations and Guidelines
Each field has validation rules to ensure consistent formatting:
- **Titles**: 5-100 characters.
- **Subtitles**: Up to 250 characters.
- **Labels**: Up to 25 characters.
- **Placeholders**: Up to 50 characters.
- **Buttons**: Up to 25 characters.
- **Alt Text**: Up to 250 characters.
- **Announcements**: Up to 100 characters.

Refer to the hints provided in the customization files to ensure proper formatting.

### Updating Customizations
After making changes to any file in `/src/customisations`, commit and push the changes to trigger a rebuild and redeployment of the site.
```



## Development

### Cloning

#### Prerequisites

- Node.js (v20 or newer)
- A package manager like npm or yarn

#### Running Locally

1. Clone your forked repository:

   ```bash
   git clone https://github.com/1st-Chertsey-Scout-Group/one-page-scout-website.git
   cd one-page-scout-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ````bash
   npm run start
   ```1
   ````
4. Open your browser at `http://localhost:4321`.

### VS Code Dev Containers

This repository supports development using **VS Code Dev Containers**, which provides a pre-configured Docker environment for development.

#### Prerequisites

1. [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running.
2. Install the **Remote Development Extension Pack** in Visual Studio Code:  
   [Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

#### Steps to Set Up

1. Run the following in the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)

   ```bash
   Dev Containers: Clone Repository in Container Volume...
   ```

2. Clone your forked repository
3. VS Code will build and start the Dev Container. This may take a few minutes on the first run.
4. Once inside the container, use the terminal to run commands like:
   ```bash
   npx decap-server # to use the admin interface locally
   npm run netlify functions:serve # to run the netlify serverless functions
   ```

The Dev Container ensures a consistent development environment with all necessary dependencies installed.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for suggestions and improvements.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
