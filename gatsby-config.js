module.exports = {
  plugins: [
    // You can have multiple instances of this plugin to read source files from
    // different repositories or locations within a repository.
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-one`,
        remote: `https://github.com/rkmth/docmodule1.git`,
        branch: `master`,
        // Only import the docs folder from a codebase.
        patterns: `docs/**`
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-one`,
        remote: `https://github.com/rkmth/docmodule2.git`,
        branch: `master`,
        // Only import the docs folder from a codebase.
        patterns: `docs/**`
      }
    }
  ]
};