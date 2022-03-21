import { BsChevronLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import './axies.css';
import { AiFillHeart, AiFillThunderbolt, AiFillStar, AiFillFire } from 'react-icons/ai';
import images from '../../../constants/images';
import { useSelector } from 'react-redux';

const AxieCard = () => {
    return (
        <div className='px-2 py-2' style={{ border: '1px solid #3a3f50', borderRadius: '6px', width: '180px', marginRight: '10px', marginTop: '10px', marginBottom: '10px' }}>
            <div>
                <div className='px-3 my-2' style={{ backgroundColor: 'red', textAlign: 'center', borderRadius: '5px', fontSize: '12px', textOverflow: 'ellipsis', width: '100px' }}>#123456</div>
                <div style={{ color: '#fff', fontSize: '12px' }}>Bird Aqua</div>
                <SubHeading>BREED COUNT: 7</SubHeading>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center py-5'>
                <img alt='main' src={images.tabAxie} style={{ alignSelf: 'center', width: '90px' }} />
            </div>
        </div>
    );
}

const Heading = ({ children }) => <div style={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}>{children}</div>

const SubHeading = ({ children }) => <span style={{ color: '#a1a6b6', fontFamily: 'venir Next,Muli,sans-serif', marginTop: '10px', fontSize: '10px', letterSpacing: '1px', lineHeight: '14px' }}>{children}</span>

const SectionContainer = ({ children }) => <div className='my-2 py-2 px-4' style={{ borderRadius: '6px', border: '1px solid #3a3f50', backgroundColor: '#282b39' }}>{children}</div>

const IconContainer = ({ children }) => <div className='d-flex justify-content-center align-items-center px-2 py-1' style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', marginRight: '5px' }}>{children}</div>

const AbilityCard = () => (
    <div className='ability-container d-flex flex-column justify-content-between my-3' >
        <div className='flex-row d-flex' >
            <div className='ability-level'>3</div>
            <div className='ability-heading'>Sneaky Raid</div>
        </div>
        <div>
            <div className='left-count'>
                <img src={images.shield} height='30px' width='30px' style={{ marginLeft: -2 }} />
                <span style={{ position: 'absolute', zIndex: 2 }}>40</span>
            </div>
            <div className='left-count'>
                <img src={images.shield} height='30px' width='30px' style={{ marginLeft: -2 }} />
                <span style={{ position: 'absolute', zIndex: 2 }}>40</span>
            </div>
        </div>
        <div className='flex-row d-flex' >
            <img src={images.stun} style={{ height: '20px', width: '20px', alignSelf: 'center', marginLeft: '10px', marginTop: -8 }} />
            <div className='ability-description'>Stun attacker if this Axie's shield breaks. Can only trigger once per round.</div>
        </div>
    </div>
);

const AxieDetails = () => {

    const { state } = useLocation();
    const { isMobileDevice } = useSelector(state => state.appDetails);
    const navigate = useNavigate();
    const axie = state;

    return (
        <div className={`py-3 d-flex ${isMobileDevice ? 'flex-column' : 'flex-row'}`} style={isMobileDevice ? { paddingLeft: '10px', paddingRight: '10px' } : { paddingLeft: '200px', paddingRight: '200px' }}>
            <div className='d-flex flex-column'>
                <div style={{ cursor: 'pointer', width: '100px' }} onClick={() => navigate(-1)} className='d-flex flex-row align-items-center'>
                    <BsChevronLeft color='#fff' />
                    <div style={{ color: '#fff', marginLeft: '10px' }}>Back</div>
                </div>
                <div className='d-flex px-3 my-2' style={{ backgroundColor: axie.color, textAlign: 'center', borderRadius: '5px', fontSize: '12px', textOverflow: 'ellipsis', width: '100px' }}>{axie.id}</div>
                <span style={{ color: '#fff', fontSize: '28px' }}>ThietPC</span>
                <div className='d-flex justify-content-center'>
                    <img width='450px' src={axie.image} alt='axies' />
                </div>
            </div>
            <div className='d-flex flex-column w-100' style={{ overflowY: isMobileDevice ? 'visible' : 'scroll', height: '700px' }}>
                <Heading>About</Heading>
                <SectionContainer>
                    <div style={{ marginBottom: '10px' }} className='d-flex flex-row align-items-center'>
                        <div style={{ marginRight: '20px' }}>
                            <SubHeading>CLASS</SubHeading>
                            <div style={{ color: '#fff' }}>{axie.class}</div>
                        </div>
                        <div>
                            <SubHeading>BREED COUNT</SubHeading>
                            <div style={{ color: '#fff' }}>{axie.breed_count} / 7</div>
                        </div>
                    </div>
                    <div>
                        <SubHeading>OWNER</SubHeading>
                        <div style={{ color: '#fff' }}>Jennie</div>
                    </div>
                </SectionContainer>
                <Heading>Stats</Heading>
                <SectionContainer>
                    <div style={{ marginBottom: '10px' }} className='d-flex flex-row align-items-center'>
                        <div style={{ marginRight: '60px' }}>
                            <SubHeading>HEALTH</SubHeading>
                            <div className='d-flex align-items-center flex-row' style={{ color: '#fff' }}>
                                <IconContainer>{<AiFillHeart color='green' height={20} width={20} />}</IconContainer>{axie.health}
                            </div>
                        </div>
                        <div style={{ marginRight: '60px' }}>
                            <SubHeading>SPEED</SubHeading>
                            <div className='d-flex align-items-center flex-row' style={{ color: '#fff' }}>
                                <IconContainer>{<AiFillThunderbolt color='orange' height={20} width={20} />}</IconContainer>{axie.speed}
                            </div>
                        </div>
                        <div style={{ marginRight: '60px' }}>
                            <SubHeading>SKILL</SubHeading>
                            <div className='d-flex align-items-center flex-row' style={{ color: '#fff' }}>
                                <IconContainer>{<AiFillStar color='purple' height={20} width={20} />}</IconContainer>{axie.skill}
                            </div>
                        </div>
                        <div style={{ marginRight: '60px' }}>
                            <SubHeading>MORALE</SubHeading>
                            <div className='d-flex align-items-center flex-row' style={{ color: '#fff' }}>
                                <IconContainer>{<AiFillFire color='red' height={20} width={20} />}</IconContainer>{axie.morale}
                            </div>
                        </div>
                    </div>
                </SectionContainer>
                <Heading>BodyParts</Heading>
                <SectionContainer>
                    <div className='flex-row flex-wrap d-flex justify-content-between' style={{ marginLeft: '-20px' }}>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop1}</div>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop2}</div>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop3}</div>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop4}</div>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop5}</div>
                        <div className='p-4 d-flex flex-row align-items-center justify-content-center' style={{ color: '#fff' }}><img alt='bodypart' style={{ marginRight: '10px' }} src={images.tabAxie} />{axie.prop6}</div>
                    </div>
                </SectionContainer>
                <Heading>Abilities</Heading>
                <SectionContainer>
                    <div className='d-flex flex-row flex-wrap justify-content-around'>
                        <AbilityCard />
                        <AbilityCard />
                        <AbilityCard />
                        <AbilityCard />
                        <AbilityCard />
                        <AbilityCard />
                    </div>
                </SectionContainer>
                <Heading>Parents</Heading>
                <div className='d-flex flex-row flex-wrap'>
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />

                </div>
                <Heading>Children</Heading>
                <div className='d-flex flex-row flex-wrap'>
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />
                    <AxieCard />
                </div>
            </div>
        </div>
    );
}

export default AxieDetails;