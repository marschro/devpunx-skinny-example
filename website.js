module.exports = {
    root: {
        meta: {
            title: 'Home of Devpunx | the X makes the difference',
            description: 'This is some description',
            template: 'landing',
            alias: 'Home'
        },
        content: {
            h1: '␥ Devpunx',
            article: 'bla'
        }
    },
    services: {
        meta: {
            title: 'Our Devpunx Work | the X makes the difference',
            description: 'This is some description',
            template: 'subpage',
            alias: 'Our Service'
        },
        content: {
            h1: 'That is our work',
            article: 'Bla Bla!'
        },
        strategy: {
            meta: {
                title: 'Our Devpunx Product | the X makes the difference',
                description: 'This is some description',
                template: 'subpage',
                alias: 'Digital Strategy'
            },
            content: {
                h1: 'Strategy for your brand',
                article: 'Bla Bla!'
            }
        },
        design: {
            meta: {
                title: 'Our Devpunx Product | the X makes the difference',
                description: 'This is some description',
                template: 'subpage',
                alias: 'Design'
            },
            content: {
                h1: 'Design for your brand',
                article: 'Bla Bla!'
            }
        },
        development: {
            meta: {
                title: 'Our Devpunx Product | the X makes the difference',
                description: 'This is some description',
                template: 'subpage',
                alias: 'Development'
            },
            content: {
                h1: 'Developing your brand',
                article: 'Bla Bla!'
            },
            nodejs: {
                meta: {
                    title: 'Our Devpunx Product | the X makes the difference',
                    description: 'This is some description',
                    template: 'subpage'
                },
                content: {
                    h1: 'node.js state of the art',
                    article: 'Bla Bla!'
                }
            },
            html5: {
                meta: {
                    title: 'Our Devpunx Product | the X makes the difference',
                    description: 'This is some description',
                    template: 'subpage'
                },
                content: {
                    h1: 'We make html5',
                    article: 'Bla Bla!'
                }
            },
            mobileReady: {
                meta: {
                    title: 'Our Devpunx Product | the X makes the difference',
                    description: 'This is some description',
                    template: 'subpage',
                    alias: 'mobile ready'
                },
                content: {
                    h1: 'Mobile Ready!',
                    article: 'Bla Bla!'
                }
            }
        }
    },
    about: {
        meta: {
            title: 'About Devpunx | the X makes the difference',
            description: 'This is some description',
            template: 'subpage',
            alias: 'About Us'
        },
        content: {
            h1: 'About Devpunx',
            article: 'All about us!'
        },
        team: {
            meta: {
                title: 'Our Devpunx Team | the X makes the difference',
                description: 'This is some description',
                template: 'subpage',
                alias: 'Team'
            },
            content: {
                h1: 'Thats us!',
                article: 'Martin und andere...'
            }
        }
    },
    contact: {
        meta: {
            title: 'contact of Devpunx | the X makes the difference',
            description: 'contact us',
            template: 'subpage',
            alias: 'Get in contact'
        },
        content: {
            h1: 'contact us',
            article: 'how to contact'
        }
    },
    impressum: {
        meta: {
            title: 'Impressum of Devpunx | the X makes the difference',
            description: 'This is the impressum',
            template: 'subpage',
            hidden: true
        },
        content: {
            h1: 'Impressum',
            article: 'Some impressum stuff'
        }
    },
    '*': {
        meta: {
            title: '404 - Not Found',
            description: 'We have not found what you were looking for',
            template : 'error',
            hidden: true
        },
        content: {
            h1: 'Sorry - 404 - not found'
        }
    }
}
