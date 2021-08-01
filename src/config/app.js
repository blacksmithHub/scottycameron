export default {
  /**
   * Services Configuration
   */
  services: {
    port: process.env.VUE_APP_PORT,
    redirect: process.env.VUE_APP_REDIRECT,

    /**
     * ===========================================
     * Discord Service Configuration
     * ===========================================
     *
     */
    discord: {
      clientId: process.env.VUE_APP_DISCORD_CLIENT_ID
    }
  },

  /**
   * Bot Configuration
   */
  bot: {
    avatar: process.env.VUE_APP_BOT_AVATAR,
    webhook: process.env.VUE_APP_BOT_WEBHOOK
  }
}
