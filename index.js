const { Plugin } = require('powercord/entities')

module.exports = class QuickThemeToggler extends Plugin {
    async startPlugin () {
        this._themesStatus = true
        document.addEventListener('keydown', this.onKeyDownWrapper.bind(this))
    }

    pluginWillUnload () { document.removeEventListener(this.onKeyDownWrapper.bind(this)) }

    onKeyDown (e) {
      switch (e.code) {
        case 'F6':
            if(!this._themesStatus)return;

            powercord.styleManager.unloadThemes()

            this._themesStatus = false;
          break
        case 'F7': {
            if(this._themesStatus === true)return;

            powercord.styleManager.loadThemes()

            this._themesStatus = true;
          break
        }
      }
    }
  
    onKeyDownWrapper (e) { this.onKeyDown(e) }
}