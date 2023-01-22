export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bien joué!', 'Magnifique', 'Bravo!']
export const GAME_COPIED_MESSAGE = 'Le jeu a été dans le presse-papier'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Pas assez de lettres'
export const WORD_NOT_FOUND_MESSAGE = 'Le mot ne se trouve pas dans la base de données'
export const HARD_MODE_ALERT_MESSAGE =
  "Le mode difficile s'active seulement au début!"
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Le mot était ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Entrer'
export const DELETE_TEXT = 'Supprimer'
export const STATISTICS_TITLE = 'Statistiques'
export const GUESS_DISTRIBUTION_TEXT = 'Distribution des résultats'
export const NEW_WORD_TEXT = 'Nouveau mot dans'
export const SHARE_TEXT = 'Partager'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Choisissez une date passée'
export const DATEPICKER_CHOOSE_TEXT = 'Choisir'
export const DATEPICKER_TODAY_TEXT = "aujourd'hui"
export const ARCHIVE_GAMEDATE_TEXT = 'Date du jeu'
