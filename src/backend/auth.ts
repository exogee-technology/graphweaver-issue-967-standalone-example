import {
	UserProfile,
	AuthZero,
	setAddUserToContext,
	setImplicitAllow,
} from '@exogee/graphweaver-auth';

export const authZero = new AuthZero();

export const addUserToContext = async (userId: string) => {
	return new UserProfile({
		id: userId,
		roles: ['everyone'],
	});
};

setAddUserToContext(addUserToContext);
setImplicitAllow(true);
