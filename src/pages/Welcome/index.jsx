import { h, Component } from 'preact';
import { Card } from 'flowbite-react';

export function WelcomePage() {
        return (
            <div class="container mx-auto p-8">
                <h1 class="text-5xl font-semibold mb-8">Welcome to OptiShop!</h1>

                <p class="text-lg mb-8">
                    OptiShop is your go-to destination for all your eyewear needs. We specialize in providing high-quality eyewear,
                    including a wide range of contact lenses, custom glasses, and accessories.
                </p>

                <h2 class="text-3xl font-semibold mb-4">Our Products</h2>

                <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card className=' bg-inherit border-orange-500'>
                        <h5 class="text-lg font-semibold">Contact Lenses</h5>
                        <div>
                            <p>
                                Discover our collection of comfortable and high-performance contact lenses. Whether you need daily, weekly,
                                or monthly lenses, we have the perfect fit for you.
                            </p>
                        </div>
                    </Card>

                    <Card className=' bg-inherit border-orange-500'>
                        <h5 class="text-lg font-semibold">Custom Glasses</h5>
                        <div>
                            <p>
                                Stand out with our custom glasses tailored to your unique style. Choose from a variety of frames and lenses
                                to create eyewear that reflects your personality and preferences.
                            </p>
                        </div>
                    </Card>

                    <Card className=' bg-inherit border-orange-500'> 
                        <h5 class="text-lg font-semibold">Accessories</h5>
                        <div>
                            <p>
                                Enhance your eyewear experience with our selection of accessories. From stylish cases to cleaning kits,
                                we've got everything you need to care for and showcase your eyewear.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }


export default WelcomePage;
