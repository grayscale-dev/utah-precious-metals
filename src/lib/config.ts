import rawConfig from '../../site-remodel.config.json'

export type CreativeFreedom = 'low' | 'medium' | 'high'

export interface SiteRemodelConfig {
  primaryColor: string
  secondaryColor: string
  siteName: string
  sourceUrl: string
  tone: string
  notes: string
  creativeFreedom: CreativeFreedom
  visualDirection: string
  layoutStyle: string
  referenceNotes: string
  useSupabase: boolean
}

const defaults: SiteRemodelConfig = {
  primaryColor: '#1d4ed8',
  secondaryColor: '#0f172a',
  siteName: 'Website Remodel Starter',
  sourceUrl: '',
  tone: 'modern, clear, trustworthy',
  notes: '',
  creativeFreedom: 'medium',
  visualDirection: 'clean professional',
  layoutStyle: 'structured',
  referenceNotes: '',
  useSupabase: false
}

const configInput = (rawConfig ?? {}) as Partial<SiteRemodelConfig>

function readString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0
    ? value.trim()
    : fallback
}

function readBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback
}

function readCreativeFreedom(
  value: unknown,
  fallback: CreativeFreedom
): CreativeFreedom {
  return value === 'low' || value === 'medium' || value === 'high'
    ? value
    : fallback
}

export const remodelConfig: SiteRemodelConfig = {
  primaryColor: readString(configInput.primaryColor, defaults.primaryColor),
  secondaryColor: readString(
    configInput.secondaryColor,
    defaults.secondaryColor
  ),
  siteName: readString(configInput.siteName, defaults.siteName),
  sourceUrl: readString(configInput.sourceUrl, defaults.sourceUrl),
  tone: readString(configInput.tone, defaults.tone),
  notes: readString(configInput.notes, defaults.notes),
  creativeFreedom: readCreativeFreedom(
    configInput.creativeFreedom,
    defaults.creativeFreedom
  ),
  visualDirection: readString(
    configInput.visualDirection,
    defaults.visualDirection
  ),
  layoutStyle: readString(configInput.layoutStyle, defaults.layoutStyle),
  referenceNotes: readString(
    configInput.referenceNotes,
    defaults.referenceNotes
  ),
  useSupabase: readBoolean(configInput.useSupabase, defaults.useSupabase)
}
