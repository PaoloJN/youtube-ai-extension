import { SecureStorage } from "@plasmohq/storage/secure"

export const storage = new SecureStorage()

storage.setPassword("password") // TODO: Use a more secure password
