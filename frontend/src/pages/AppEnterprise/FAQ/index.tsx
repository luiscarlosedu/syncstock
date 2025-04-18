import { Container, FaqAccordion, FaqAnswer, FaqContentContainer, FaqHeader, FaqItem, FaqQuestion, FaqTitle } from "./styles";

import { FAQ_DATA } from "./faq_data";
import { useState } from "react";

export default function FAQEnterprise() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <Container>
            <FaqContentContainer>
                <FaqHeader>
                    <FaqTitle>Frequently Asked Questions</FaqTitle>
                </FaqHeader>

                <FaqAccordion>
                    {FAQ_DATA.map((item, index) => (
                        <FaqItem
                            key={index}
                        >
                            <FaqQuestion
                                onClick={() => {
                                    setOpenIndex(openIndex === index ? null : index)
                                }}
                                isOpen={openIndex === index}
                            >
                                {item.question}
                            </FaqQuestion>
                            {openIndex === index && (
                                <FaqAnswer>{item.answer}</FaqAnswer>
                            )}
                        </FaqItem>
                    ))}
                </FaqAccordion>
            </FaqContentContainer>
        </Container>
    );
}