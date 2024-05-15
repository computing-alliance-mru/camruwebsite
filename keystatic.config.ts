// keystatic.config.ts
import {
  config,
  fields,
  singleton,
  LocalConfig,
  GitHubConfig,
} from "@keystatic/core";

const localMode: LocalConfig["storage"] = {
  kind: "local",
};

const githubMode: GitHubConfig["storage"] = {
  kind: "github",
  repo: {
    owner: "RamiMikha",
    name: "camruwebsite",
  },
};

const isProd = true; // process.env.NODE_ENV === "production";

export default config({
  storage: isProd ? githubMode : localMode,
  singletons: {
    hero: singleton({
      label: "Hero",
      path: "content/hero",
      schema: {
        smalltagline: fields.text({
          label: "Small Tagline",
        }),
        bigtagline: fields.text({
          label: "Big Tagline",
        }),
        subtext: fields.text({
          label: "Subtext",
        }),
      },
    }),
    aboutus: singleton({
      label: "About Us",
      path: "content/aboutus",
      schema: {
        aboutus: fields.text({
          label: "About Us",
          multiline: true,
        }),
        aboutusimage: fields.image({
          label: "Image",
          description: "The image for the about us section",
          directory: "public/images",
          publicPath: "/images/",
        }),
      },
    }),
    perks: singleton({
      label: "Perks",
      path: "content/perks",
      schema: {
        perk1title: fields.text({
          label: "Perk 1 Title",
        }),
        perk1content: fields.text({
          label: "Perk 1 Content",
        }),
        perk1: fields.image({
          label: "Perk 1 Image",
          description: "The image for the first perk",
          directory: "public/images",
          publicPath: "/images/",
        }),
        perk2title: fields.text({
          label: "Perk 2 Title",
        }),
        perk2content: fields.text({
          label: "Perk 2 Content",
        }),
        perk2: fields.image({
          label: "Perk 2 Image",
          description: "The image for the second perk",
          directory: "public/images",
          publicPath: "/images/",
        }),
        perk3title: fields.text({
          label: "Perk 3 Title",
        }),
        perk3content: fields.text({
          label: "Perk 3 Content",
        }),
        perk3: fields.image({
          label: "Perk 3 Image",
          description: "The image for the third perk",
          directory: "public/images",
          publicPath: "/images/",
        }),
      },
    }),
  },
  collections: {
    executives: {
      label: "Executives",
      path: "content/executives/*",
      slugField: "role",
      schema: {
        name: fields.text({
          label: "Executive Name",
          description: "The name of the executive",
        }),
        role: fields.text({
          label: "Role",
          description: "The role of the executive",
        }),
        image: fields.image({
          label: "Image",
          description:
            "The image of the executive. Use something professional!",
          directory: "public/images/executives",
          publicPath: "/images/executives/",
        }),
        linkedin: fields.url({
          label: "LinkedIn",
          description: "LinkedIn URL",
        }),
        email: fields.text({
          label: "Email",
          description: "Your MRU email address",
        }),
        priority: fields.integer({
          label: "Priority",
          description:
            "Where should this executive be displayed? Lower numbers are displayed first.",
        }),
      },
    },
  },
});
