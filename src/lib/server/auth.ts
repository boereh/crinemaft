import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	BETTER_AUTH_URL,
	DISCORD_CLIENT_SECRET,
	DISCORD_CLIENT_ID,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	X_CLIENT_ID,
	X_CLIENT_SECRET,
	TWITCH_CLIENT_ID,
	TWITCH_CLIENT_SECRET,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_CLIENT_ID,
	ROBLOX_CLIENT_SECRET,
	ROBLOX_CLIENT_ID,
	REDDIT_CLIENT_SECRET,
	REDDIT_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	FACEBOOK_CLIENT_ID
} from '$env/static/private';

export const auth = betterAuth({
	baseURL: BETTER_AUTH_URL,
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	socialProviders: {
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		},
		discord: {
			clientId: DISCORD_CLIENT_ID,
			clientSecret: DISCORD_CLIENT_SECRET
		},
		github: {
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET
		},
		facebook: {
			clientId: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET
		},
		reddit: {
			clientId: REDDIT_CLIENT_ID,
			clientSecret: REDDIT_CLIENT_SECRET
		},
		roblox: {
			clientId: ROBLOX_CLIENT_ID,
			clientSecret: ROBLOX_CLIENT_SECRET
		},
		spotify: {
			clientId: SPOTIFY_CLIENT_ID,
			clientSecret: SPOTIFY_CLIENT_SECRET
		},
		twitch: {
			clientId: TWITCH_CLIENT_ID,
			clientSecret: TWITCH_CLIENT_SECRET
		},
		twitter: {
			clientId: X_CLIENT_ID,
			clientSecret: X_CLIENT_SECRET
		}
	}
});
