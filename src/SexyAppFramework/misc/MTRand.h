#ifndef __MTRAND_H__
#define __MTRAND_H__

#include <string>
#include "SexyAppFramework/Common.h"

namespace Sexy
{

#define MTRAND_N 624

class MTRand
{
	ulong mt[MTRAND_N]; /* the array for the state vector  */
	int mti;

public:
	MTRand(const std::string& theSerialData);
	MTRand(ulong seed);
	MTRand();

	void SRand(const std::string& theSerialData);
	void SRand(ulong seed);
	ulong NextNoAssert();
	ulong Next();
	ulong NextNoAssert(ulong range);
	ulong Next(ulong range);
	float NextNoAssert(float range);
	float Next( float range );

	std::string Serialize();

	static void SetRandAllowed(bool allowed);
};

struct MTAutoDisallowRand
{
	MTAutoDisallowRand() { MTRand::SetRandAllowed(false); }
	~MTAutoDisallowRand() { MTRand::SetRandAllowed(true); }
};

}

#endif //__MTRAND_H__